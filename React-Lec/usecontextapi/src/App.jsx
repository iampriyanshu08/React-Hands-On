import React from "react";
import Home from "./Components/Home";
import { Hello } from "./Context/Username";

const App = () => {
  return (
    <>
      <Hello>
        <div
          style={{
            border: "5px solid red",
            width: "500px",
            height: "600px",
            marginInline: "auto",
            textAlign: "center",
            marginBlock: "50px",
          }}
        >
          <h1>Hey i am App</h1>
          <Home />
        </div>
      </Hello>
    </>
  );
};

export default App;
