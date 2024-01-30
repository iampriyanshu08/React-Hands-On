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
import ProductList from "./Components/ProductList";
import Products from "./Components/Products";

const App = () => {
  // const data = [
  //   {
  //     title: "RS-X Geek Unisex Sneakers",
  //     price: "Rs. 4999",
  //     trend: "Running",
  //     img: shoes,
  //   },
  //   {
  //     title: "shoes",
  //     price: "Rs. 3999",
  //     trend: "Trainig",
  //     img: shoes1,
  //   },
  //   {
  //     title: "new shoes",
  //     price: "Rs. 2999",
  //     trend: "Yoga",
  //     img: shoes2,
  //   },
  //   {
  //     title: "sneakers",
  //     price: "Rs. 5999",
  //     trend: "Jumping",
  //     img: shoes3,
  //   },
  //   {
  //     title: "canvas",
  //     price: "Rs. 1999",
  //     trend: "Sprinting",
  //     img: shoes4,
  //   },
  // ];


  const info = [{
    "name": "hero Product",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "hero": "OMG This just came out today!",
    "image": shoes
  },{
    "name": "Product 1",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "image": shoes1
  },{
    "name": "Product 2",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "BOGOF",
    "image": shoes2
  },{
    "name": "Product 3",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": shoes3
  },{
    "name": "Product 4",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "No srsly GTFO",
    "image": shoes4
  },{
    "name": "Product 5",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": shoes
  },{
    "name": "Product 6",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "offer": "info with offer",
    "image": shoes1
  }]

  return (
    <div className="app">
      {/* <Header />
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
      </div> */}
      {/* <Footer /> */}


<ProductList/>
<Products name= {info[0].name} img={info[0].image} detail={info[0].detail} price= {info[0].price}/>
<Products name= {info[1].name} img={info[1].image} detail={info[1].detail} price= {info[1].price}/>
<Products name= {info[2].name} img={info[2].image} detail={info[2].detail} price= {info[2].price}/>
<Products name= {info[3].name} img={info[3].image} detail={info[3].detail} price= {info[3].price}/>
<Products name= {info[4].name} img={info[4].image} detail={info[4].detail} price= {info[4].price}/>


    </div>
  );
};

export default App;
