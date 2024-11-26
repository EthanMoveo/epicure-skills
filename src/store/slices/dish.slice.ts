// src/store/slices/dishSwiper.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDishSwiper } from '../thunks/dish.thunk';
import { Dish } from '../../constants/interfaces/Dish';

interface DishSwiperState {
  dishesSwiper: Dish[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DishSwiperState = {
  dishesSwiper: [],
  isLoading: false,
  error: null,
};

const dishSwiperSlice = createSlice({
  name: 'dishSwiper',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishSwiper.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDishSwiper.fulfilled, (state, action: PayloadAction<Dish[]>) => {
        state.isLoading = false;
        state.dishesSwiper = action.payload;
      })
      .addCase(fetchDishSwiper.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default dishSwiperSlice.reducer;
