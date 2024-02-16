import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Music from "./Components/Music";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
