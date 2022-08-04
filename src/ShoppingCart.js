import { createSlice } from "@reduxjs/toolkit";

export const ShoppingCartList = createSlice({
  name: "ShoppingCartList",
  initialState: {
    ShoppingCartList: [],
  },
  reducers: {
    add: (state, action) => {
      if (state.ShoppingCartList.length === 0) {
        state.ShoppingCartList.push(action.payload);
        console.log(state.ShoppingCartList[0].name);
      } else {
        for (const some of state.ShoppingCartList) {
          if (some.id === action.payload.id) {
            console.log("dups");
          } else {
            state.ShoppingCartList.push(action.payload);
            console.log(state.ShoppingCartList[0].name);
          }
        }
      }
    },
    remove: (state, action) => {
      state.ShoppingCartList.pop(action.payload);
    },
    quantityInc: (state, action) => {
      for (const some of state.ShoppingCartList) {
        if (some.id === action.payload.id) {
          some.quantity++;
        }
      }
    },
    quantityDec: (state, action) => {
      if (action.payload.quantity > 1) {
        for (const some of state.ShoppingCartList) {
          if (some.id === action.payload.id) {
            some.quantity--;
          }
        }
      }
    },
    empty: (state) => {
      state.ShoppingCartList = [];
      console.log("cleared");
    },
  },
});
// Action creators are generated for each case reducer function
export const { add, remove, empty, quantityInc, quantityDec } =
  ShoppingCartList.actions;

export default ShoppingCartList.reducer;
