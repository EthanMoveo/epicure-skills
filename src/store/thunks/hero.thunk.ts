// src/store/thunks/hero.thunk.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHeroAdapter } from '../adapters/hero.adapter';

export const fetchHero = createAsyncThunk(
  'hero/fetchHero',
  async (_, { rejectWithValue }) => {
    try {
      const heroData = await fetchHeroAdapter();
      return {text: heroData.data.text, inputPlaceholder: heroData.data.inputPlaceholder, background:heroData.data.background.url};
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error fetching hero data');
    }
  }
);
