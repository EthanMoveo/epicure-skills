import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurants } from '../thunks/restaurant.thunk';
import { Restaurant } from '../../constants/interfaces/Restaurant';

interface RestaurantsState {
  restaurants: Restaurant[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  isLoading: boolean
  error: string | null;
}

const initialState: RestaurantsState = {
  restaurants: [],
  status: 'idle',
  isLoading: false,
  error: null,
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;

      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch restaurants';
      });
  },
});

export default restaurantsSlice.reducer;