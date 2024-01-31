"use client";


import axios from "axios";
import React,{ useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;

  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const {data} = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"+id);
    setusers(data)
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <>  {JSON.stringify(users)}</>;
};

export default page;
