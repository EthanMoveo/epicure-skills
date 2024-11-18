import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRestaurantsFromApi } from '../adapters/restaurant.adapter';
import { Restaurant } from '../../constants/interfaces/Restaurant';

export const fetchRestaurants = createAsyncThunk<Restaurant[]>(
  'restaurants/fetchRestaurants',
  async () => {
    const data = await fetchRestaurantsFromApi();
    return data;
  }
);
