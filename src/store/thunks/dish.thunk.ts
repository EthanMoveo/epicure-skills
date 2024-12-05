import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDishSwiperAdapter } from '../adapters/dish.adapter';

export const fetchDishSwiper = createAsyncThunk(
  'dishSwiper/fetchDishSwiper',
  async (_, { rejectWithValue }) => {
    try {
      const rawData = await fetchDishSwiperAdapter();

      // Extract sectionTitle and dishes
      const sectionTitle = rawData.data.sectionTitle;
      const dishes = rawData.data.dishes.map((dish: any) => ({
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

      return { sectionTitle, dishes };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
