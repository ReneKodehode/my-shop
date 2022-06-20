import { createSlice } from "@reduxjs/toolkit";

export const ShoppingCartList = createSlice({
  name: "ShoppingCartList",
  initialState: {
    ShoppingCartList: [],
  },
  reducers: {
    add: (state, action) => {
      state.ShoppingCartList.push(action.payload);
    },
    remove: (state, action) => {
      state.ShoppingCartList.pop(action.payload);
    },
    empty: (state) => {
      state.ShoppingCartList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, empty } = ShoppingCartList.actions;

export default ShoppingCartList.reducer;
