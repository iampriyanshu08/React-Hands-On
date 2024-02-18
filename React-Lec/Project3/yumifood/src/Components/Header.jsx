import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[25px] bg-zinc-500 py-[20px] cursor-pointer text-lg font-semibold border-b relative">
      <div>
        <p>
          Just<span className="text-[#fbc531]">Eat</span>
        </p>
      </div>
      <div >
       
        <ul className="sm:flex gap-12  hidden  ">
          <li className="hover:text-[#fbc531]">Home</li>
          <li className="hover:text-[#fbc531]">About us</li>
          <li className="hover:text-[#fbc531]">Offers</li>
          <li className="hover:text-[#fbc531]">Sign in</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center ">
        <p>
          <GiHamburgerMenu size={30} className="sm:hidden block" />
        </p>
        <p>
          {" "}
          <FaCartShopping size={30} />
        </p>
      </div>
    </div>
  );
};

export default Header;


//
{/* <div className="bg-zinc-500 w-[300px]  absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center">
        <RxCross2 size={30} className="absolute top-5 right-5" />
        <ul className="sm:flex gap-12  hidden flex-col   ">
          <li className="hover:text-[#fbc531]">Home</li>
          <li className="hover:text-[#fbc531]">About us</li>
          <li className="hover:text-[#fbc531]">Offers</li>
          <li className="hover:text-[#fbc531]">Sign in</li>
        </ul>
      </div>  */}