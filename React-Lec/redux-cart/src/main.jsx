import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { CartStore } from "./ReduxStore/CartStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={CartStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
