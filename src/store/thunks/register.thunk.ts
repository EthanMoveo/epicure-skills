// src/store/thunks/register.thunk.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerAdapter } from '../adapters/register.adapter';

interface RegisterPayload {
  username: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (payload: RegisterPayload, { rejectWithValue }) => {
    try {
      const response = await registerAdapter(payload);
      return response.data; 
    } catch (error: any) {
        const errorMessage = error.message === 'This attribute must be unique'
          ? 'This username already exists in our system.'
          : error.message;

      return rejectWithValue(errorMessage);
    }
  }
);
