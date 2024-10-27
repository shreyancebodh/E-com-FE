import toast from "react-hot-toast";
import { loginUser, registerUser } from "./authThunk";

export const authReducers = (builder) => {
  builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      const { token, ...user } = action.payload;

      state.loading = false;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      toast.success('Logged in successfully');
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload)
      state.error = action.payload || "Something went wrong, Please try again later.";
      toast.dismiss();
      toast.error(action.payload);
    })

    // register
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload; // Set user data after registration
      toast.success('Registered successfully');
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong, Please try again later.";
      toast.error(action.payload);
    });
};
