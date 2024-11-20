import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from '../adapters/auth.adapter';

export const loginUser = createAsyncThunk<{ token: string, user: string }, { username: string; password: string }>(
  'auth/loginUser',
  async ({ username, password }) => {
    const data = await loginUserApi(username, password);
    localStorage.setItem('token', data.token); 
    localStorage.setItem('user', data.user);
    return data;
  }
);

export const registerUser = createAsyncThunk<{ message: string }, { username: string; password: string }>(
  'auth/registerUser',
  async ({ username, password }) => {
    const data = await registerUserApi(username, password);
    return data;
  }
);
