import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const ImgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [slider, setSlider] = useState(0);
  const handlePlus = () => {
    setSlider(slider === ImgData.length - 1 ? 0 : slider + 1);
  };
  const handleMinus = () => {
    setSlider(slider === 0 ? ImageData.length - 1 : slider - 1);
  };
  useEffect(() => {
    const sliderClear = setInterval(() => {
      handlePlus();
    }, 2000);
    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <div className="mb-[5%] ">
      <div className="w-[90%] mx-auto h-[80vh] my-5 py-5 relative ">
        {ImgData.map((item, index) => (
          <div
            key={index}
            className={`${slider === index ? "block" : "hidden"}`}
          >
            <img
              src={item.url}
              alt=""
              className="w-full h-[80vh] object-cover rounded-2xl"
            />
          </div>
        ))}
        <div className="w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-5 left-0 rounded-2xl"></div>
        <div className="w-full absolute text-white top-[46%] text-center md:text-7xl text-3xl font-semibold flex justify-center">
          <p className="md:w-full w-[60%]">Fastest Delivery & Easy Pickup</p>
        </div>
        <div className="flex w-full justify-between px-1 absolute top-[50%] text-white">
          <FaChevronLeft
            size={35}
            className="cursor-pointer"
            onClick={handleMinus}
          />
          <FaChevronRight
            size={35}
            className="cursor-pointer"
            onClick={handlePlus}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
