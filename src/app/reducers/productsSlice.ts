import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootStateType } from "../store";
import {
  ProductsInitialStateType,
  SingleProductType,
  ProductType,
} from "../types";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",

  // promise has to have a return type
  async (url: string): Promise<[]> => {
    const response = await axios.get(url);
    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",

  // promise has to have a return type
  async (url: string): Promise<SingleProductType> => {
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
  single_product: {
    featured: false,
    category: "",
    name: "",
    price: 0,
    description: "",
    stock: 0,
    stars: 0,
    reviews: 0,
    id: "",
    company: "",
    colors: [],
    images: [],
    shipping: false,
  },
  similar_products: [],

  // states from the filterSlice initial states
  filtered_products: [],
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
    // sidebar reducers
    sideBarOpen(state, { payload }) {
      state.isSidebarOpen = payload;
    },
    sideBarClose(state, { payload }) {
      state.isSidebarOpen = payload;
    },

    // grid_view state (grid/list view) reducers
    setGridView(state, { payload }) {
      state.grid_view = payload;
    },

    setListView(state, { payload }) {
      state.grid_view = payload;
    },
  },
  extraReducers: (builder) => {
    // // // // //
    // fetch all products extra reducers
    // // // // //
    builder.addCase(fetchAllProducts.pending, (state) => {
      return { ...state, products_loading: true };
    });

    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      // featured_ones is an array of ProductType items
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
        // examine if you should use
        // products: [...action.payload]
        // filtered_products: [...action.payload]
      };
    });

    builder.addCase(fetchAllProducts.rejected, (state) => {
      return { ...state, products_loading: false, products_error: true };
    });
    // // // // //
    // fetch single product extra reducers
    // // // // //
    builder.addCase(fetchSingleProduct.pending, (state) => {
      return { ...state, single_product_loading: true };
    });

    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      // get similar products
      // use a ProductType array because we're extracting similar items from the all products array, which is an array made up of ProductType objects.
      const allCategoryItems: ProductType[] = state.products.filter(
        (product: ProductType) => {
          return product.category === action.payload.category;
        }
      );

      const similarItems: ProductType[] = allCategoryItems.filter(
        (item: ProductType) => {
          return item.name !== action.payload.name;
        }
      );

      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
        similar_products: similarItems,
      };
    });

    builder.addCase(fetchSingleProduct.rejected, (state) => {
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };
    });

    // extraReducers for the filterSlice states
  },
});

// products slice actions
export const { sideBarOpen, sideBarClose, setGridView, setListView } =
  productsSlice.actions;

// products slice getters

// all products getters
export const getAllProducts = (state: RootStateType) => state.products.products;
export const getAllProductsLoading = (state: RootStateType) =>
  state.products.products_loading;
export const getAllProductsError = (state: RootStateType) =>
  state.products.products_error;

// single product getters
export const getSingleProduct = (state: RootStateType) =>
  state.products.single_product;
export const getSingleProductLoading = (state: RootStateType) =>
  state.products.single_product_loading;
export const getSingleProductError = (state: RootStateType) =>
  state.products.single_product_error;

// similar products getter
export const getSimilarProducts = (state: RootStateType) =>
  state.products.similar_products;

// featured products getter
export const getFeaturedProducts = (state: RootStateType) =>
  state.products.featured_products;

// filtered products getters
export const getFilteredProducts = (state: RootStateType) =>
  state.products.filtered_products;

// sidebar getters
export const getSidebarStatus = (state: RootStateType) =>
  state.products.isSidebarOpen;

// grid and list view getters
export const getGridView = (state: RootStateType) => state.products.grid_view;

export default productsSlice.reducer;
