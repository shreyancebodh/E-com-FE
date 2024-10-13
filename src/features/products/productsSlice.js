import { createSlice } from '@reduxjs/toolkit';
import { fetchSingleProduct, loadProducts } from './productsThunks';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedProduct: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedProduct = {};
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      ////////////////
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.selectedProduct = {};
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
