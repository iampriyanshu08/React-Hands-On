import React, { useEffect, useState } from "react";
import "../Components/Product.css";
import data from "./Data/Data.js";

const Product = () => {
  const [productItem, setProductItem] = useState([]);
  const handleFilter = () => {
    const filterItems = productItem.filter((items) => {
      return items.price < 20;
    });
    setProductItem(filterItems);
  };
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProductItem(data))
  }, [])
  

  return (
    <>
      <div>
        <button onClick={handleFilter}>Filter by price</button>
      </div>
      <div className="cards">
        {productItem.map((item, id) => {
          return (
            <div className="card" key={id}>
              <h3>{item.title}</h3>

              <img className="images" src={item.image} alt={item.title} />

              <h4>Price: {item.price}₹</h4>
              <p>description: {item.description}</p>
              <h4>category: {item.category}</h4>
              <h4>rating: {item.rating.rate}</h4>
              <button>Add</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
