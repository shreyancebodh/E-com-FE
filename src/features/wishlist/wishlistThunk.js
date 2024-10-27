import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const res = await apiClient.get("/api/v1/wishlist");
    return res.data;
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId) => {
    const response = await apiClient.post("/api/v1/wishlist/add", { productId });
    return response.data;
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productId) => {
    const response = await apiClient.delete(`/api/v1/wishlist/remove/${productId}`);
    return response.data;
  }
);
