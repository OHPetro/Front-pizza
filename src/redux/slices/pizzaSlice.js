import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async () => {
  const res = await axios.get("https://645e9a7612e0a87ac0f423c3.mockapi.io/pizzas?");
  return res.data;
});

const initialState = {
  items: [],
  isLoaded: false,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      // якщо відправка
      state.items = []; // щоб випадко не показало старі елементи, після вибору нових
      state.isLoaded = false;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      // якщо успішно
      state.items = action.payload;
      state.isLoaded = true;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      // якщо помилка
      state.items = [];
      state.isLoaded = true;
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
