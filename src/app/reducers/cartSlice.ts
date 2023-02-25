import { createSlice } from "@reduxjs/toolkit";
import { CartInitialStateType, CartProductType } from "../types";
import { RootStateType } from "../store";

// get the cart stored in localStorage
const getLocalStorage = () => {
  const storedCart: string | null = localStorage.getItem("cart");
  let cart: CartProductType[] = [];

  if (storedCart) {
    cart = JSON.parse(storedCart);
    return cart;
  }
  return cart;
};

const initialState: CartInitialStateType = {
  cart: getLocalStorage(),
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
      const { id, amount, mainColor: color, product } = payload;

      // create a tempItem for the received product
      // check to find it in the cart state
      // undefined is there if the item doesn't exist in the state
      const tempItem: CartProductType | undefined = state.cart.find(
        (item) => item.id === id + color
      );

      // if tempItem product exists in the state, create tempCart array
      if (tempItem) {
        const tempCart: CartProductType[] = state.cart.map(
          (cartItem: CartProductType) => {
            // for cartItem whose id matches id + color from payload
            if (cartItem.id === id + color) {
              let newAmount = cartItem.amount + amount;
              if (newAmount > cartItem.max) {
                newAmount = cartItem.max;
              }
              // spread the cart item, set amount to newAmount
              return { ...cartItem, amount: newAmount };
            } else {
              // return all other cartItems unaltered
              return cartItem;
            }
          }
        );

        // spread the state and set cart state to the tempCart array
        return { ...state, cart: tempCart };
      } else {
        // if tempItem doesn't exist
        const newItem: CartProductType = {
          id: id + color,
          name: product.name,
          color: color,
          amount: amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        // spread the state, spread the cart and add the new item
        return { ...state, cart: [...state.cart, newItem] };
      }
    },

    // remove a single item item
    removeItem(state, { payload }) {
      const tempCart: CartProductType[] = state.cart.filter(
        (item) => item.id !== payload
      );

      state.cart = tempCart;
    },

    // toggle (increase/decrease) amount for a single item
    toggleAmount(state, { payload }) {
      const { id, value } = payload;

      // map the existing cart into tempCart array
      // check for the item with the matching id
      // if the value is increase and newAmount is bigger than cart item's max (stock value) set newAmount to cart item's max (stock value)
      const tempCart: CartProductType[] = state.cart.map(
        (item: CartProductType) => {
          if (item.id === id) {
            if (value === "increase") {
              let newAmount = item.amount + 1;
              if (newAmount > item.max) {
                newAmount = item.max;
              }
              return { ...item, amount: newAmount };
            }

            // if the value is decrease & newAmount is <1, set it to 1
            // return: spread the item, set amount to newAmount
            if (value === "decrease") {
              let newAmount = item.amount - 1;
              if (newAmount < 1) {
                newAmount = 1;
              }
              return { ...item, amount: newAmount };
            }
          }
          // finally, return items which don't match the id as they are
          return item;
        }
      );

      // set cart to tempCart
      state.cart = tempCart;
    },

    // clear out the entire cart
    clearCart(state) {
      state.cart = [];
    },

    countCartTotals(state) {
      // destructure total_item and total_amount from the cart state
      // reduce each cart item
      // destructure each item's amount and price
      // total_items state gets all amounts
      // total_amount state gets all price * amount values
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_items, total_amount };
    },
  },
});

// cart slice actions
export const {
  addToCart,
  removeItem,
  toggleAmount,
  clearCart,
  countCartTotals,
} = cartSlice.actions;

// cart slice getters

// get cart
export const getCart = (state: RootStateType) => state.cart.cart;

// get total items
export const getTotalItems = (state: RootStateType) => state.cart.total_items;

// get total amount (price)
export const getTotalAmount = (state: RootStateType) => state.cart.total_amount;

// get shipping fee
export const getShippingFee = (state: RootStateType) => state.cart.shipping_fee;

export default cartSlice.reducer;
