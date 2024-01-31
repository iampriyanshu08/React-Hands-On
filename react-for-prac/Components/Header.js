import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = ({number}) => {
  console.log(number);
  return (
    <div className="bg-red-300 p-5">
      {/* <div className="h-16 px-5 font-bold text-2xl bg-green-600 flex items-center justify-between">
        <h2>logo</h2>
        <div className="flex gap-8">
          <Link href="/About">About</Link>
          <Link href="/Product">Product</Link>
          <Link href="/Courses">Courses</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div> */}
      <h1>mai hoon header</h1>
      <p>{number}</p>
      <Navbar num = {number}/>

    </div>
  );
};

export default Header;
