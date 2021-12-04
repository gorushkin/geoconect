import { createSlice } from '@reduxjs/toolkit';

import { asyncActions } from './user';

const initialState = {
  show: false,
  body: '',
  type: '',
  color: 'info',
};

const slice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert(state, { payload }) {
      return { ...state, show: true, ...payload };
    },
    hideAlert() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncActions.authLoginhRequest.rejected, (state, { payload }) => {
      return { ...state, show: true, body: payload };
    });
  },
});

export const actions = { ...slice.actions };

export default slice.reducer;
