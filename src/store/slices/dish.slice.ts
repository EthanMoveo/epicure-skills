import { createSlice } from '@reduxjs/toolkit';
import { fetchDishes } from '../thunks/dish.thunk';
import { Dish } from '../../constants/interfaces/Dish';

interface DishesState {
  dishes: Dish[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  isLoading: boolean;
  error: string | null;
}

const initialState: DishesState = {
  dishes: [],
  status: 'idle',
  isLoading: false,
  error: null,
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.dishes = action.payload;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch dishes';
      });
  },
});

export default dishesSlice.reducer;
