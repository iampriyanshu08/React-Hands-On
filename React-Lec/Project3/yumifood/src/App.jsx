import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Foods from "./Components/Foods";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import Cart from "./Components/Cart";

const App = () => {
  const [count, setcount] = useState(0)
  const handleCount = ()=>{
    setcount(count+1)
  }
  return (
    <div>
      <BrowserRouter>
        <Header count = {count} />
        <Routes>
          <Route path="/" element={<Home handleCount={handleCount}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/ourfood" element={<Foods handleCount={handleCount} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
