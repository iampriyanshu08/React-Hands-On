import React, { useState } from "react";

const Product = ({ val, data }) => {
  const [a, b] = useState(false);
  return (
    <div>
      <h1>the value of a is : {val}</h1>
      <h1>name : {data.name}</h1>
      <h1>age : {data.age}</h1>
      <h2 className={`${a === false ? "text-red-500" : "text-blue-500"}`}>
        {a === false ? "hello" : "hey"}
      </h2>
      <button
        onClick={() => {
          b(!a);
        }}
      >
        {" "}
        Change
      </button>
    </div>
  );
};

export default Product;
