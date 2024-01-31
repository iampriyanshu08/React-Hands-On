"use client";

import Form from "@/Components/Form";
import Header from "@/Components/Header";
import axios from "axios";
// import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   getImage();
  // }, []);

  // const getImage = async () => {
  //   try {
  //     const response = await axios.get("https://picsum.photos/v2/list");
  //     const data = response.data;
  //     setImages(data);
  //     console.log(images);
  //   } catch (error) {
  //     console.error("error getting images");
  //   }
  // };



  const [users, setusers] = useState([])

  const getUsers = async()=>{
   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
   setusers(data)
   
   console.log(data)
  }

  useEffect(() => {
   getUsers()
  
    
  }, [])
  
  return (
    <div>
      {/* <h1>This is Home Page</h1>
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
      </div> */}

      <button onClick={getUsers} className="bg-red-500 px-4 py-3 rounded-full mt-5 mx-5 text-white font-bold">Get data</button>
      <div className="p-8 bg-slate-100 mt-5">
        <ul>
          {users.map((e,key)=>{
            return <li key={key}>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
          })}
        </ul>
      </div>

      {/* <Form/> */}
    </div>
  );
};

export default page;
