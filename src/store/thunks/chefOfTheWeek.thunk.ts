import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChefOfTheWeekAdapter } from '../adapters/chefOfTheWeek.adapter';
import { Chef } from '../../constants/interfaces/Chef';
import { ChefRestaurants } from '../../constants/interfaces/ChefRestaurants';

export const fetchChefOfTheWeek = createAsyncThunk(
  'chefOfTheWeek/fetchChefWeek',
  async (_, { rejectWithValue }) => {
    try {
      const { chef: rawChefData, restaurants: rawRestaurantsData } = await fetchChefOfTheWeekAdapter();

      const formattedChef: Chef = {
        id: rawChefData.data.chef.id,
        name: rawChefData.data.chef.name,
        image: rawChefData.data.chef.image?.url || '',
        description: rawChefData.data.chef.description,
      };

      const formattedRestaurants: ChefRestaurants[] = rawRestaurantsData.map((restaurant: any) => ({
        id: restaurant.id,
        name: restaurant.name,
        image: restaurant.image?.url || '',
      }));

      return { sectionTitle: rawChefData.data.sectionTitle ,chef: formattedChef, chefRestaurants: formattedRestaurants };
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error fetching chef of the week data');
    }
  }
);
