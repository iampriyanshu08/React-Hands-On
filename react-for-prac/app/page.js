"use client";

import Header from "@/Components/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(images);
    } catch (error) {
      console.error("error getting images");
    }
  };
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>Axios</p>

      <button onClick={getImage} className="px-5 py-3 bg-gray-500 text-white">
        Get images
      </button>
      <div className="p-10">
        {images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-5 rounded inline-block"
              alt="imagessss"
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
