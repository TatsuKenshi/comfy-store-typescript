import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootStateType } from "../store";

export const fetchAllProducts = createAsyncThunk(
  "movies/fetchAsyncMovies",

  async (url: string): Promise<any> => {
    const response = await axios.get(url);
    return response.data;
  }
);

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

interface ProductsSliceTypes {
  name: string;
  initialState: {};
  reducers: {};
  extraReducers?: any;
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAllProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, () => {
      console.log("pending");
    });

    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      console.log("success");
      return { ...state, products: action.payload };
    });

    builder.addCase(fetchAllProducts.rejected, () => {
      console.log("rejected");
    });
  },
});

export const { addAllProducts } = productsSlice.actions;
export const getAllProducts = (state: RootStateType) => state.products.products;
export const getSidebarStatus = (state: RootStateType) =>
  state.products.isSidebarOpen;

export default productsSlice.reducer;
