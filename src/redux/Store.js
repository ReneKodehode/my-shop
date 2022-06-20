import { configureStore } from "@reduxjs/toolkit";
import { ShoppingCartList } from "../pages/landingPage/ShoppingCart";

export default configureStore({
  reducer: {
    ShoppingCart: ShoppingCartList.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
