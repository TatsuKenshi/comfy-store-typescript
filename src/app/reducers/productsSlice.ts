import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../store";

type InitialState = {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: [];
  featured_products: [];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: {};
  similar_products: [];
};

const initialState: InitialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  similar_products: [],
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
