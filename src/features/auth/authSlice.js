import { createSlice } from "@reduxjs/toolkit";
import { authReducers } from "./authReducers";
import toast from "react-hot-toast";

const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || null,
  isAuthenticated: !!localStorage.getItem('authToken'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      state.user = null;
      state.isAuthenticated = false;
      toast.success("Logged out successfully")
    },
  },
  extraReducers: authReducers,
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
