import { createSlice } from "@reduxjs/toolkit";
import { cartReducers } from "./cartReducers";

const initialState = {
  items: [],
  totalPrice: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.product._id === action.payload._id
      );

      if (existingProductIndex >= 0) {
        const item = state.items[existingProductIndex];
        item.quantity += 1;
      } else {
        state.items.push({
          product: { ...action.payload },
          quantity: 1,
        });
      }
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.product._id === action.payload._id
      );

      if (existingProductIndex >= 0) {
        const item = state.items[existingProductIndex];
        state.totalPrice -= item.product.price;
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(existingProductIndex, 1);
        }
      }
    },
    deleteFromCart: (state, action) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.product._id === action.payload._id
      );

      if(existingProductIndex >= 0){
        const item = state.items[existingProductIndex];
        state.totalPrice -= item.quantity * item.product.price;
        state.items.splice(existingProductIndex, 1)
      }
    },
  },
  extraReducers: cartReducers,
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
