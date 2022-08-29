import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import seasonsReducer from './seasons/seasonsSlice';

const store = configureStore({
  reducer: {
    rockets: seasonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
