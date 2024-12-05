// src/store/slices/aboutUs.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAboutUs } from '../thunks/aboutUs.thunk';
import SectionIcons from '../../components/SectionIcons/SectionIcons.component';

interface AboutUsState {
  sectionTitle: string;
  content: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: AboutUsState = {
  sectionTitle: '',
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
      .addCase(fetchAboutUs.fulfilled, (state, action: PayloadAction<{sectionTitle: string; content: string;}>) => {
        state.isLoading = false;
        state.content = action.payload.content;
        state.sectionTitle = action.payload.sectionTitle;
      })
      .addCase(fetchAboutUs.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default aboutUsSlice.reducer;
