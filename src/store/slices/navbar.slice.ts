import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNavbar } from '../thunks/navbar.thunk';

interface NavbarItem {
  item: string;
  link: string;
}

interface NavbarState {
  items: NavbarItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NavbarState = {
  items: [],
  isLoading: false,
  error: null,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    resetNavbarState: () => initialState, // Réinitialise l'état
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNavbar.fulfilled, (state, action: PayloadAction<NavbarItem[]>) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchNavbar.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetNavbarState } = navbarSlice.actions; 
export default navbarSlice.reducer;
