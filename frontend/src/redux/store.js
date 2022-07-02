import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './card/reducer';

const store = configureStore({
  reducer: cardReducer,
});

export default store;
