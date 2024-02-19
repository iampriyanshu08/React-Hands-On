import React from "react";
import Hero from "./Hero";
import Delivery from "./Delivery";
import TopPicks from "./TopPicks";
import Foods from "./Foods";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Delivery />
        <TopPicks />
        <Foods />
      </div>
    </>
  );
};

export default Home;
