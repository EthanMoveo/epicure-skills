import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChefOfTheWeekFromApi } from '../adapters/chefOfTheWeek.adapter';
import { Chef } from '../../constants/interfaces/Chef';
import { ChefRestaurants } from '../../constants/interfaces/ChefRestaurants';
import { Restaurant } from '../../constants/interfaces/Restaurant';

export const fetchChefOfTheWeek = createAsyncThunk<Chef>(
  'chefOfTheWeek/fetchChefOfTheWeek',
  async () => {
    const response = await fetchChefOfTheWeekFromApi();

    const chefOfTheWeekData = response.chefOfTheWeek;

    const chefOfTheWeek: Chef = {
      ...chefOfTheWeekData,
      restaurants: (chefOfTheWeekData.restaurants as Restaurant[]).map((restaurant): ChefRestaurants => ({
        _id: restaurant._id,
        name: restaurant.name,
        image: restaurant.image,
      })),
    };

    return chefOfTheWeek;
  }
);
