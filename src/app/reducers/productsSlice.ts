import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../store";

type InitialState = {
  products: [];
  isSidebarOpen: boolean;
};

const initialState: InitialState = {
  products: [],
  isSidebarOpen: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAllProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { addAllProducts } = productsSlice.actions;
export const getAllProducts = (state: RootStateType) => state.products.products;
export const getSidebarStatus = (state: RootStateType) =>
  state.products.isSidebarOpen;

export default productsSlice.reducer;
