import React from "react";
import { topPicks } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopPicks = () => {
  const settings = {
    dots: true,
    infinite: false,

    slidesToShow: 4,
    slidesToScroll: 1,
    
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-[90%] mx-auto   ">
        <h2 className="text-4xl font-bold sm:pl-28">What's on your mind?</h2>
        <div className="py-20">
          <Slider {...settings}>
            {topPicks.map((item) => (
              <div className="bg-white rounded-md"  key={item.id}>
                <div className=" flex justify-center items-center  rounded-md">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[200px] h-[200px] rounded-full object-cover "
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-2 p-2">
                  <p className="text-xl font-semibold uppercase">
                    {item.title}
                  </p>
                  <p className="text-lg font-semibold ">Price : {item.price}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="bg-red-800 w-[100px] text-white rounded-md my-6 py-3  hover:text-[#fbc531] text-sm font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopPicks;
