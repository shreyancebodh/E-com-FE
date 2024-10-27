import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";
import { fetchWishlist } from "../wishlist/wishlistThunk";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiClient.post("/api/v1/auth/login", {
        email,
        password,
      });
      console.log(response)
      const { token, ...user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(fetchWishlist());
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/api/v1/auth/register", userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
