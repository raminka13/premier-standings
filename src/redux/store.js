import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import seasonsReducer from './seasons/seasonsSlice';
import standingsReducer from './standings/standingsSlice';

const store = configureStore({
  reducer: {
    seasons: seasonsReducer,
    standings: standingsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
