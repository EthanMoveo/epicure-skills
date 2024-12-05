import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRestaurantSwiper } from '../thunks/restaurant.thunk';
import { Restaurant } from '../../constants/interfaces/Restaurant';

interface RestaurantSwiperState {
  sectionTitle: string; 
  restaurantsSwiper: Restaurant[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RestaurantSwiperState = {
sectionTitle: '', 
restaurantsSwiper: [],
isLoading: false,
error: null,
};

const restaurantSwiperSlice = createSlice({
  name: 'restaurantSwiper',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantSwiper.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantSwiper.fulfilled, (state, action: PayloadAction<{ sectionTitle: string; restaurants: Restaurant[] }>) => {
        state.isLoading = false;
        state.sectionTitle = action.payload.sectionTitle; 
        state.restaurantsSwiper = action.payload.restaurants; 
      })
      .addCase(fetchRestaurantSwiper.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});


export default restaurantSwiperSlice.reducer;
