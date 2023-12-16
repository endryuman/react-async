import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://657d99183e3f5b189462cbc2.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchSingle',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
