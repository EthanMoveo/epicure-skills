import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchHero } from '../thunks/hero.thunk';

interface HeroState {
  text: string;
  inputPlaceholder: string;
  background: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: HeroState = {
  text: '',
  inputPlaceholder: '',
  background: '',
  isLoading: false,
  error: null,
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHero.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchHero.fulfilled,
        (state, action: PayloadAction<{ text: string; inputPlaceholder: string; background: string }>) => {
          state.isLoading = false;
          state.text = action.payload.text;
          state.inputPlaceholder = action.payload.inputPlaceholder;
          state.background = action.payload.background;
        }
      )
      .addCase(fetchHero.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default heroSlice.reducer;
