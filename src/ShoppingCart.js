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
        let isThereNoDuplicates = true;
        for (const some of state.ShoppingCartList) {
          if (some.id === action.payload.id) {
            isThereNoDuplicates = false;
          }
        }
        if (isThereNoDuplicates) {
          state.ShoppingCartList.push(action.payload);
          console.log(action.payload);
        }
      }
    },
    remove: (state, action) => {
      for (const some of state.ShoppingCartList) {
        if (action.payload.id === some.id) {
          state.ShoppingCartList.splice(
            state.ShoppingCartList.indexOf(some),
            1
          );
        }
      }
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
