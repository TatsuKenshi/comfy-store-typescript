import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../store";

type InitialState = {
  myUser: {} | null;
};

const initialState: InitialState = {
  myUser: null,
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
