<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import singleProductReducer from '../features/singleProductSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        singleProduct: singleProductReducer,
    },
});
=======
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../fetures/productsSlice";
// import singleProductReducer from "../features/singleProductSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // singleProduct: singleProductReducer,
  },
});
>>>>>>> origin/Rohul
