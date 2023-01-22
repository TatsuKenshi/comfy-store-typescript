import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
