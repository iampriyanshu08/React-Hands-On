"use client";

import Header from "@/Components/Header";
import { MyContext } from "@/Helper/Context";
import React, { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const page = () => {

  const notify=()=>{
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
     
      });
  }
  const [num, setnum] = useState(10);

  const user = useContext(MyContext);
  console.log(user);

  return (
    <div>
      {/* <h1>this is home page</h1>
      <p>{num}</p>
      <button onClick={()=>{
        setnum(num+1)
      }}>update</button>
      <Header number = {num}/> */}
      {/* <h1>{user[1]}</h1>
      <Header/> */}

      <button className="bg-gray-600 text-white" onClick={notify}>Get Login</button>
      <ToastContainer/>
    </div>
  );
};

export default page;
