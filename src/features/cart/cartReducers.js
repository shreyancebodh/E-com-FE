import toast from "react-hot-toast";
import { addItemToCart, deleteItemFromCart, getCart } from "./cartThunk";

export const cartReducers = (builder) => {
  builder
    .addCase(getCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getCart.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;

      state.totalPrice = state.items.reduce((total, item) => {
        return (total += item.quantity * item.product.price);
      }, 0);
    })
    .addCase(getCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(action.payload)
    })

    // ---------------------------- add item to cart
    .addCase(addItemToCart.fulfilled, (state, action) => {
      // state.status = "succeeded";
      // Replace the optimistic update with the server response
      state.items = action.payload;
      toast.success("Item added to cart")
    })
    .addCase(addItemToCart.rejected, (state, action) => {
      // state.status = "failed";
      state.error = action.payload;
      toast.error(action.payload)
    })

    // ---------------------------- delete item from cart
    .addCase(deleteItemFromCart.fulfilled, (state, action) => {
      state.items = action.payload;
      toast.success("Item removed from cart")
    })
    .addCase(deleteItemFromCart.rejected, (state, action) => {
      state.error = action.payload;
      toast.error(action.payload)
    });
};
