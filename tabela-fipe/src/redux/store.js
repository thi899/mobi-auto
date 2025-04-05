import { configureStore } from '@reduxjs/toolkit';
import fipeReducer from './slices/fipeSlice';

export const store = configureStore({
  reducer: {
    fipe: fipeReducer
  }
});
