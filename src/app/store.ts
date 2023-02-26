import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

// default store state and dispatch action types
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
