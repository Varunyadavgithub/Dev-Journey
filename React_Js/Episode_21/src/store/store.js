import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // slices
    cart: cartReducer,
  },
});

export default appStore;
