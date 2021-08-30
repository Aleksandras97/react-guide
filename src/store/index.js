import { createSlice, configureStore } from "@reduxjs/toolkit";

const intialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  intialState: intialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    hideCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  counter: counterSlice.reducer
});
console.log(counterSlice.actions);

export const counterActions = counterSlice.actions;

export default store;
