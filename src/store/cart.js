import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    repalceCart(state, { payload }) {
      state.totalAmount = payload.totalAmount;
      state.items = payload.items;
    },
    addtoCart(state, { payload }) {
      const existingItem = state.items.find((item) => item.id === payload.id);
      state.totalAmount++;
      state.changed = true;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
      } else {
        state.items.push({
          id: payload.id,
          title: payload.title,
          price: payload.price,
          total: payload.price,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, { payload }) {
      const itemId = payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.totalAmount--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
