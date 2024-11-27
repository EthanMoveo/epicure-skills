// src/store/slices/register.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser } from '../thunks/register.thunk';

interface RegisterState {
  user: {
    id: number | null;
    username: string | null;
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  user: {
    id: null,
    username: null,
  },
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    resetState: () => initialState, // Réinitialisation complète
    resetErrorRegisterMessage: (state) => {
      state.error = null; // Réinitialise uniquement l'erreur
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ id: number; username: string }>) => {
        state.isLoading = false;
        state.user.id = action.payload.id;
        state.user.username = action.payload.username;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload; // Stocke le message d'erreur
      });
  },
});

export const { resetState, resetErrorRegisterMessage } = registerSlice.actions; // Exportez les actions
export default registerSlice.reducer;
