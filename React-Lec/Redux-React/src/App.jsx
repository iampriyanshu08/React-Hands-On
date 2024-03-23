import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addByAmount, decrement, increment } from "./ReduxSlice/CounterSlice";

const App = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch  = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
     <div>
     <button onClick={()=>dispatch(decrement())}>minus</button>
      <button onClick={()=>dispatch(increment())}>plus</button>
      <button onClick={()=>dispatch(addByAmount(5))}>add by amount</button>
     </div>
    </div>
  );
};

export default App;
