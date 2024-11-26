import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDishSwiperAdapter } from '../adapters/dish.adapter';
import { Dish } from '../../constants/interfaces/Dish';

export const fetchDishSwiper = createAsyncThunk(
  'dishSwiper/fetchDishSwiper',
  async (_, { rejectWithValue }) => {
    try {
      const rawData = await fetchDishSwiperAdapter();

      const formattedData: Dish[] = rawData.data.dishes.map((dish: any) => ({
        id: dish.id,
        name: dish.name,
        image: dish.image.url,
        price: dish.price,
        ingredients: dish.ingredients,
        tags: dish.tags.map((tag: any) => ({
          name: tag.name,
          url: tag.image.url,
        })),
      }));

      return formattedData;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
