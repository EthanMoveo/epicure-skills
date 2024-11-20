import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../thunks/auth.thunk';

interface RegisterState {
  error: string | null;
  isLoading: boolean;
  registerMessage: string | null;
}

const initialState: RegisterState = {
  error: null,
  isLoading: false,
  registerMessage: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {    
    resetRegisterMessage(state) {
    state.registerMessage = null;
  },
    resetErrorRegisterMessage(state) {
      state.error = null;
    }},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registerMessage = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to register';
      });
  },
});

export const { resetRegisterMessage, resetErrorRegisterMessage } = registerSlice.actions;
export default registerSlice.reducer;
