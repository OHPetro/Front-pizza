import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import pizzaSlice from "./slices/pizzaSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pizza: pizzaSlice,
    cart: cartSlice,
  },
});
