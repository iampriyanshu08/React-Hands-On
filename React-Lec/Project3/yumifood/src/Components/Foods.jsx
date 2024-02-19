import React from "react";
import { FoodData } from "../data/Data";

const Foods = () => {
  return (
    <>
      <div className="w-[90%] mx-auto  mb-20">
        <div>
          <h2 className="text-[#fbc531] text-center text-3xl md:text-5xl font-bold py-5">
            Our Food Items
          </h2>
        </div>

        <div className=" flex flex-wrap gap-10 justify-center items-center p-10 text-center">
          {FoodData.map((item, i) => (
            <div key={item.id}>
              <img
                src={item.image}
                className="w-[200px] h-[200px] rounded-full object-cover "
                alt=""
              />
              <div> <p className="text-xl font-semibold capitalize mt-5">{item.name}</p></div>
              <div><p className="text-lg font-semibold">{item.category}</p></div>
              <div><p className="text-lg font-semibold">{item.price}</p></div>
             <button className="bg-red-800 w-[100px] text-white rounded-md my-6 py-3  hover:text-[#fbc531] text-sm font-semibold">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Foods;
