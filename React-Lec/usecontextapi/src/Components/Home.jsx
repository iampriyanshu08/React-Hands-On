import React from "react";
import Child from "./Child";

const Home = () => {
  return (
    <div
      style={{
        border: "5px solid yellow",
        width: "400px",
        height: "450px",
        marginInline: "auto",
        textAlign: "center",
      }}
    >
      <h1>Hey i am Home</h1>
      <div
        style={{
          border: "5px solid green",
          width: "300px",
          height: "300px",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <Child />
      </div>
    </div>
  );
};

export default Home;
