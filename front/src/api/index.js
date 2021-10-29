import axios from 'axios';
import Cookies from 'js-cookie';

import config from '../configs';

export const apiRoutes = {
  AUTH: 'auth',
  NEWS: 'news',
};

export const routes = {
  LOGIN: '/admin/login',
  NEWS: '/admin/news',
  EDIT_NEWS: '/admin/edit_news',
};

const token = Cookies.get('token');

const instance = axios.create({
  baseURL: `${config.ORIGIN}${config.API_BASE_URL}`,
  ...(token && {
    headers: {
      Authorization: token,
    },
  }),
});

// TODO: Добавить вывод алерта с ошибкой

const errorHandler = async (promise) => {
  try {
    return await promise;
  } catch (error) {
    const message =
      error.response && typeof error.response.data === 'object'
        ? Object.values(error.response.data).join(' \n')
        : error.message;
    console.log('message: ', message);
    return { data: null };
  }
};

export const authRequest = (data) => instance.post(apiRoutes.AUTH, data);

export const postRequest = () => instance.get(apiRoutes.NEWS);

export const createNewsRequest = (data) => {
  const formData = new FormData();
  formData.append('file', data.file);
  formData.append('title', data.title);
  formData.append('body', data.body);
  return errorHandler(instance.post(apiRoutes.NEWS, formData));
};

export const getAllNewsRequest = () => errorHandler(instance.get(apiRoutes.NEWS));

export const getNewsRequest = (id) => errorHandler(instance.get(`${apiRoutes.NEWS}/${id}`));

export const updateNewsRequest = (id, data) =>
  errorHandler(instance.patch(`${apiRoutes.NEWS}/${id}`, data));

export const deleteNewsRequest = (id) => errorHandler(instance.delete(`${apiRoutes.NEWS}/${id}`));

export default instance;
