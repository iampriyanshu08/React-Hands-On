import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Foods from "./Components/Foods";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourfood" element={<Foods />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
