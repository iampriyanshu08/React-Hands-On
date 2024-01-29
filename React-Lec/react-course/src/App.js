import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import shoes from "./Assets/puma-shoes.jpeg";
import shoes1 from "./Assets/shoes1.jpeg";
import shoes2 from "./Assets/puma-shoes.jpeg";
import shoes3 from "./Assets/shoes-2.jpeg";
import shoes4 from "./Assets/puma-shoes.jpeg";

const App = () => {
  const data = [
    {
      title: "RS-X Geek Unisex Sneakers",
      price: "Rs. 4999",
      trend: "Running",
      img: shoes,
    },
    {
      title: "shoes",
      price: "Rs. 3999",
      trend: "Trainig",
      img: shoes1,
    },
    {
      title: "new shoes",
      price: "Rs. 2999",
      trend: "Yoga",
      img: shoes2,
    },
    {
      title: "sneakers",
      price: "Rs. 5999",
      trend: "Jumping",
      img: shoes3,
    },
    {
      title: "canvas",
      price: "Rs. 1999",
      trend: "Sprinting",
      img: shoes4,
    },
  ];

  return (
    <div className="app">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "100px",
        }}
      >
        <Hero
          title={data[0].title}
          price={data[0].price}
          trend={data[0].trend}
          img={data[0].img}
        />
        <Hero
          title={data[1].title}
          price={data[1].price}
          trend={data[1].trend}
          img={data[1].img}
        />
        <Hero
          title={data[2].title}
          price={data[2].price}
          trend={data[2].trend}
          img={data[2].img}
        />
        <Hero
          title={data[3].title}
          price={data[3].price}
          trend={data[3].trend}
          img={data[3].img}
        />
        <Hero
          title={data[4].title}
          price={data[4].price}
          trend={data[4].trend}
          img={data[4].img}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
