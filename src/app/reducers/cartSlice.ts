import { createSlice } from "@reduxjs/toolkit";
import { CartInitialStateType, CartProductType } from "../types";
import { RootStateType } from "../store";

const initialState: CartInitialStateType = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add an item to the cart
    addToCart(state, { payload }) {
      // destructure the properties from the payload
      const { id, amount, mainColor: color, product } = payload;

      // create a tempItem for the received product
      // undefined is there if the item doesn't exist in the state
      const tempItem: CartProductType | undefined = state.cart.find(
        (item) => item.id === id + color
      );

      // if the tempItem product exists in the state
      if (tempItem) {
        // since tempItem exists in the state, we create tempCart array
        const tempCart: CartProductType[] | void[] = state.cart.map(
          (cartItem: CartProductType) => {
            // does an existing cartItem's id match payload product's id + color
            // if yes, add payload product's amount to the existing cartItem's amount
            // if the new amount exceedes cartItem's max (payload product's stock value)
            // newAmount is set to cartItem's max (stock) value
            if (cartItem.id === id + color) {
              let newAmount = cartItem.amount + amount;
              if (newAmount > cartItem.max) {
                newAmount = cartItem.max;
              }
              // spread the cart item, add new amount
              return { ...cartItem, amount: newAmount };
            } else {
              // if an existing cartItem's id doesn't match payload product's id + color
              // return cartItem unaltered
              return cartItem;
            }
          }
        );

        // spread the state and set cart state to the tempCart array
        return { ...state, cart: tempCart };
      } else {
        const newItem: CartProductType = {
          id: id + color,
          name: product.name,
          color: color,
          amount: amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    },
  },
});

// cart slice actions
export const { addToCart } = cartSlice.actions;

// cart slice getters

// get cart
export const getCart = (state: RootStateType) => state.cart.cart;
export const getTotalItems = (state: RootStateType) => state.cart.total_items;
export const getTotalAmount = (state: RootStateType) => state.cart.total_amount;
export const getShippingFee = (state: RootStateType) => state.cart.shipping_fee;

export default cartSlice.reducer;
