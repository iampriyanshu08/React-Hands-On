import React from "react";
import "./Hero.css";


const Hero = ({title,price,trend,img}) => {
  return (
    <div className="hero">
       <h2>{trend}</h2>
      <div style={{ border: "1px solid gray",width:"240px" , padding:"5px 5px", height:"350px" }}>
       

        <div>
          <img src={img} alt="shoes"  style={{}}/>

          <div style={{display:"flex", justifyContent:"space-between"}}>
            <p>{title}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
