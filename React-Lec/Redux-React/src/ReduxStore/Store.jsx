import { configureStore } from "@reduxjs/toolkit";
import CounterSlice  from "../ReduxSlice/CounterSlice";


export const Store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
