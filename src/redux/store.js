import { configureStore } from '@reduxjs/toolkit';
import quranReducer from './quranSlice';

export const store = configureStore({
  reducer: {
    quran: quranReducer,
  },
});
