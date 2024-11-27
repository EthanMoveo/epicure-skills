import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNavbarAdapter } from '../adapters/navbar.adapter';

export const fetchNavbar = createAsyncThunk(
  'navbar/fetchNavbar',
  async (_, { rejectWithValue }) => {
    try {
      const rawResponse = await fetchNavbarAdapter();

      const navbarItems = rawResponse.data.map((item: { item: string; link: string }) => ({
        item: item.item,
        link: item.link,
      }));

      return navbarItems;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
