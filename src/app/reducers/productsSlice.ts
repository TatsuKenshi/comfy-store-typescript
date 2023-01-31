import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootStateType } from "../store";
import { ProductsInitialStateType, ProductType } from "../types";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",

  // promise has to have a type
  async (url: string): Promise<[]> => {
    const response = await axios.get(url);
    return response.data;
  }
);

const initialState: ProductsInitialStateType = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  similar_products: [],

  // states from the filterSlice initial states
  filtered_products: [],
  // all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // inspect this one
    // regular reducers have to have state and (maybe?) action ( or {payload}) args
    // set states to payloads
    sideBarOpen(state, { payload }) {
      state.isSidebarOpen = payload;
    },
    sideBarClose(state, { payload }) {
      state.isSidebarOpen = payload;
    },

    // reducers for the filterSlice states
    setGridView(state, { payload }) {
      state.grid_view = payload;
    },

    setListView(state, { payload }) {
      state.grid_view = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      console.log("pending");
      return { ...state, products_loading: true };
    });

    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      console.log("success");
      // featured_ones is an array of ProductType items
      // every product is a ProductType item
      const featured_ones: ProductType[] = action.payload.filter(
        (product: ProductType) => {
          return product.featured === true;
        }
      );
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products: featured_ones,
        filtered_products: action.payload,
      };
    });

    builder.addCase(fetchAllProducts.rejected, (state) => {
      console.log("rejected");
      return { ...state, products_loading: false, products_error: true };
    });
  },

  // extraReducers for the filterSlice states
});

export const { sideBarOpen, sideBarClose } = productsSlice.actions;
export const getAllProducts = (state: RootStateType) => state.products.products;
export const getFilteredProducts = (state: RootStateType) =>
  state.products.filtered_products;
export const getSidebarStatus = (state: RootStateType) =>
  state.products.isSidebarOpen;
export const getGridView = (state: RootStateType) => state.products.grid_view;

export default productsSlice.reducer;
