import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAboutUsAdapter } from '../adapters/aboutUs.adapter';

export const fetchAboutUs = createAsyncThunk(
  'aboutUs/fetchAboutUs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAboutUsAdapter();
      const content = response.data.content
      const sectionTitle = response.data.sectionTitle
      return {sectionTitle, content};
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error fetching About Us content');
    }
  }
);
