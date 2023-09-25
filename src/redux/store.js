import {configureStore} from '@reduxjs/toolkit';
import BeerSlice from './slices/BeerSlice';

export const store = configureStore({
  reducer: {BeerSlice},
});
