import { createSlice } from "@reduxjs/toolkit";
// import { RootStateType } from "../store";

type InitialState = {
  filtered_products: [];
  all_products: [];
  grid_view: boolean;
  sort: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number | string;
    max_price: number | string;
    price: number | string;
    shipping: boolean;
  };
};

const initialState: InitialState = {
  filtered_products: [],
  all_products: [],
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

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export default filtersSlice.reducer;
