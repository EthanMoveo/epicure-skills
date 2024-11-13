import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDishesFromApi } from '../adapters/dish.adapter';
import { Dish } from '../../constants/interfaces/Dish';

export const fetchDishes = createAsyncThunk<Dish[]>(
  'dishes/fetchDishes',
  async () => {
    const data = await fetchDishesFromApi();
    return data;
  }
);
