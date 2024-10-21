import { loginUser, registerUser } from "./authThunk";

export const authReducers = (builder) => {
  builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      const { token, ...user } = action.payload;

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      state.loading = false;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Something went wrong, Please try again later.";
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
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message || "Something went wrong, Please try again later.";
    });
};
