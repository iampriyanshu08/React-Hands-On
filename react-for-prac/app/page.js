"use client"

import Header from "@/Components/Header";
import React, { useState } from "react";

const page = () => {
  const [name, setname] = useState("ashu")
  return (
    <>
    <Header user = {name} />
   {name}
    </>
  );
};

export default page;
