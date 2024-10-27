import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWishlist,
  addToWishlist,
  removeFromWishlist,
} from "./wishlistThunk";


const initialState = {
  items: [],
  error: null,
  loading: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
        toast.success("Item added to wishlist")
      })

      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
        toast.success("Item removed from wishlist")
      });
  },
});

export default wishlistSlice.reducer;