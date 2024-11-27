import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '../thunks/login.thunk';

interface LoginState {
  token: string | null;
  user: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetLoginState: () => initialState, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string; user: string }>) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload; 
      });
  },
});

export const { resetLoginState } = loginSlice.actions; 
export default loginSlice.reducer;
