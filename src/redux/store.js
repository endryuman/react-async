import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/sliceUsers';

export const store = configureStore({
  reducer: usersReducer,
});
