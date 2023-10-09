import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    DeleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    IncreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalprice = item.quantity * item.unitPrice;
    },
    DecreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalprice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  clearCart,
  DeleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
