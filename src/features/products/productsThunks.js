// features/products/productsThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/apiClient';

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    const response = await apiClient.get('/api/v1/products');
    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  'products/fetchSingleProduct',
  async (productId) => {
    const response = await apiClient.get(`/api/v1/products/${productId}`);
    return response.data;
  }
);