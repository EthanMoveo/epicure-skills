import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchChefOfTheWeek } from '../thunks/chefOfTheWeek.thunk';
import { Chef } from '../../constants/interfaces/Chef';
import { ChefRestaurants } from '../../constants/interfaces/ChefRestaurants';

interface ChefOfTheWeekState {
  chef: Chef | null;
  chefRestaurants: ChefRestaurants[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ChefOfTheWeekState = {
  chef: null,
  chefRestaurants: [],
  isLoading: false,
  error: null,
};

const chefWeekSlice = createSlice({
  name: 'chefOfTheWeek',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefOfTheWeek.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchChefOfTheWeek.fulfilled,
        (state, action: PayloadAction<{ chef: Chef; chefRestaurants: ChefRestaurants[] }>) => {
          state.isLoading = false;
          state.chef = action.payload.chef;
          state.chefRestaurants = action.payload.chefRestaurants;
        }
      )
      .addCase(fetchChefOfTheWeek.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default chefWeekSlice.reducer;
