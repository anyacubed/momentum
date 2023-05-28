import { configureStore } from '@reduxjs/toolkit';
import displaySlice from '../features/displaySlice';

export const store = configureStore({
  reducer: {
    display: displaySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
