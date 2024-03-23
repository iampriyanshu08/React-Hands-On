import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value < 20 && (state.value += 1);
    },
    decrement: (state) => {
      state.value > 0 && (state.value -= 1);
    },
    addByAmount: (state, action) => {
      state.value < 50 && (state.value += action.payload);
    },
  },
});

export const { increment, decrement, addByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
