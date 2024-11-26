import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../thunks/auth.thunk';

interface LoginState {
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: LoginState = {
  token: localStorage.getItem('token'),
  error: null,
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetErrorLoginMessage(state) {
    state.error = null;
  }},
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
      });
  },
});

export const { resetErrorLoginMessage,  } = loginSlice.actions;

export default loginSlice.reducer;
