import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRestaurantSwiperAdapter } from '../adapters/restaurant.adapter';

export const fetchRestaurantSwiper = createAsyncThunk(
  'restaurantSwiper/fetchRestaurantSwiper',
  async (_, { rejectWithValue }) => {
    try {
      const rawData = await fetchRestaurantSwiperAdapter();

      const sectionTitle = rawData.data.sectionTitle;
      const restaurants = rawData.data.restaurants.map((restaurant: any) => ({
        id: restaurant.id,
        name: restaurant.name,
        image: restaurant.image.url,
        chef: restaurant.chef
          ? {
              id: restaurant.chef.id,
              name: restaurant.chef.name,
              image: restaurant.chef.image ? restaurant.chef.image.url : '', 
              description: restaurant.chef.description,
            }
          : null, 
        rating: restaurant.rating,
      }));

      return { sectionTitle, restaurants };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
