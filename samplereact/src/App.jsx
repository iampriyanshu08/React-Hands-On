import React, { useState } from "react";
import Product from "./Product";

const App = () => {
  var [a, b] = useState(25);
  return (
    <div className=" w-full h-screen bg-zinc-900  text-5xl text-white p-5">
      {/* <h1>the value of a is : {a}</h1>
      <button
        className="px-5 py-5 mt-5 block  bg-red-400"
        onClick={() => {
          a < 30 ? b(a + 1) : a;
        }}
      >
        Update
      </button>
      <button
        className="px-5 py-5 mt-5 block  bg-blue-400"
        onClick={() => {
          a > 20 ? b(a - 1) : a;
        }}
      >
        Degrade
      </button> */}

      <Product val = {a} data = {{
        name:"priyanshu",
        age: 25
      }}/>
    </div>
  );
};

export default App;
