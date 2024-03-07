import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      if (state <= 9) {
        return state + 1;
      } else {
        return state;
      }

    case "decrement":
      if (state >= 1) {
        return state - 1;
      } else {
        return state;
      }
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <div>
        <h1>the value of count is {count} </h1>
        <button onClick={() => dispatch("increment")}>increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
      </div>
    </>
  );
};

export default App;
