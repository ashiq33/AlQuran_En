// src/redux/quranSlice.js

import { createSlice } from '@reduxjs/toolkit';

const quranSlice = createSlice({
  name: 'quran',
  initialState: {
    surahs: [],
    selectedSurah: null,
    loading: false,
    error: '',
  },
  reducers: {
    setSurahs: (state, action) => {
      state.surahs = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedSurah: (state, action) => {
      state.selectedSurah = action.payload;
    },
  },
});

export const { setSurahs, setLoading, setError, setSelectedSurah } = quranSlice.actions;
export default quranSlice.reducer;
