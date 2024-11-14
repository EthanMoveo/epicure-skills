import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../thunks/auth.thunk';

interface AuthState {
  token: string | null;
  error: string | null;
  isLoading: boolean;
  registerMessage: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  error: null,
  isLoading: false,
  registerMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to log in';
      })
      // Register actions
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

export default authSlice.reducer;
