import express, { Request, Response } from 'express';
import News from './news.model';

const router = express.Router();

const getAllnews = async (req: Request, res: Response) => {
  try {
    const news = await News.query();
    res.status(200).json(news);
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    res.status(500).json({ message });
  }
};

const createNews = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const news = News.fromJson(body);
    // const qwe = await News.query().insert(news);
    res.status(200).json({ news });
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    res.status(500).json({ message });
  }
};

const getNews = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  const news = await News.query().findById(id);
  if (news) {
    res.status(200).json(news);
  } else {
    res.status(404).json({ message: 'Новости с этим номером нет' });
  }
};

const updateNews = async (req: Request, res: Response) => {
  const {
    params: { id },
    body,
  } = req;
  const updatedNews = await News.query().findById(id).patch(body);
  if (updatedNews) {
    res.status(200).json(updatedNews);
  } else {
    res.status(404).json({ message: 'Новости с этим номером нет' });
  }
};

const deleteNews = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  const deletedNews = await News.query().deleteById(id);
  if (deletedNews) {
    res.status(200).json(deletedNews);
  } else {
    res.status(404).json({ message: 'Новости с этим номером нет' });
  }
};

router.get('/', getAllnews);
router.post('/', createNews);
router.get('/:id', getNews);
router.patch('/:id', updateNews);
router.delete('/:id', deleteNews);

export { router };
