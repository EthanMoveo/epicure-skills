import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDishSwiper } from '../thunks/dish.thunk';
import { Dish } from '../../constants/interfaces/Dish';

interface DishSwiperState {
  sectionTitle: string ; 
  dishesSwiper: Dish[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DishSwiperState = {
  sectionTitle: '', 
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
      .addCase(fetchDishSwiper.fulfilled, (state, action: PayloadAction<{ sectionTitle: string; dishes: Dish[] }>) => {
        state.isLoading = false;
        state.sectionTitle = action.payload.sectionTitle; // Update sectionTitle
        state.dishesSwiper = action.payload.dishes; // Update dishes
      })
      .addCase(fetchDishSwiper.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});


export default dishSwiperSlice.reducer;
