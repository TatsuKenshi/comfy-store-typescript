import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import filtersReducer from "./reducers/filtersSlice";
import userReducer from "./reducers/userSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
