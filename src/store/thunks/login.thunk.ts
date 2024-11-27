import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAdapter } from '../adapters/login.adapter';

interface LoginPayload {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await loginAdapter(payload);
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', response.user);
      return { token: response.token, user: response.user };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
