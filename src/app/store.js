import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});