"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [userdata, setuserdata] = useState("hello")
  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    setuserdata(response.data)
  };
  return <div>
    <button onClick={getdata}>click me to get the data</button>
    <p>{JSON.stringify(userdata)}</p>
  </div>;
};

export default page;
