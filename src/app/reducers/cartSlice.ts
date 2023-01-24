import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../store";

type InitialState = {
  // cart: getLocalStorage(),
  total_items: number;
  total_amount: number;
  shipping_fee: number;
};

const initialState: InitialState = {
  // cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
