import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/api/v1/cart");
      return response.data
    } catch (err) {
      let errorMessage = err.response?.data?.message || "Something went wrong";
      return rejectWithValue(errorMessage)
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (product, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/api/v1/cart/add", {
        productId: product._id
      });
      return response.data
    } catch (err) {
      let errorMessage = err.response?.data?.message || "Something went wrong";
      return rejectWithValue(errorMessage)
    }
  }
);

export const deleteItemFromCart = createAsyncThunk(
  "cart/deleteItemFromCart",
  async (product, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete(`/api/v1/cart/remove/${product._id}`);
      return response.data
    } catch (err) {
      let errorMessage = err.response?.data?.message || "Something went wrong";
      return rejectWithValue(errorMessage)
    }
  }
);
