// src/store/slices/aboutUs.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAboutUs } from '../thunks/aboutUs.thunk';

interface AboutUsState {
  content: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: AboutUsState = {
  content: '',
  isLoading: false,
  error: null,
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutUs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAboutUs.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.content = action.payload;
      })
      .addCase(fetchAboutUs.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default aboutUsSlice.reducer;
