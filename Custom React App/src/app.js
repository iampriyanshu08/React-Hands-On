import React from "react";
import  ReactDOM  from "react-dom";

const app = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "heading" }, "hey how are you")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "chacha" }, "kaise ho bro")
  ),
]);
console.log(app);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(app);
