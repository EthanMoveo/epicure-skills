import { createSlice } from '@reduxjs/toolkit';
import { fetchChefOfTheWeek } from '../thunks/chefOfTheWeek.thunk';
import { Chef } from '../../constants/interfaces/Chef';

interface ChefOfTheWeekState {
  chefOfTheWeek: Chef | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ChefOfTheWeekState = {
  chefOfTheWeek: null,
  isLoading: false,
  error: null,
};

const chefOfTheWeekSlice = createSlice({
  name: 'chefOfTheWeek',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefOfTheWeek.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChefOfTheWeek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chefOfTheWeek = action.payload;
      })
      .addCase(fetchChefOfTheWeek.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to fetch Chef of the Week';
      });
  },
});

export default chefOfTheWeekSlice.reducer;
