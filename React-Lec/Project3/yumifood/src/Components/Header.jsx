import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <div className="flex  items-center justify-between px-[25px] bg-red-700 py-[20px] cursor-pointer text-lg font-semibold border-b top-0 sticky z-50  ">
      <div>
        <p className="text-2xl">
          Just<span className="text-[#fbc531]">Eat</span>
        </p>
      </div>
      <div>
        <ul className="sm:flex gap-4  hidden  ">
          <Link to="/">
          
            <li className="hover:text-[#fbc531]">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[#fbc531]">About us</li>
          </Link>
          <Link to="/ourfood">
            <li className="hover:text-[#fbc531]">Our Food</li>
          </Link>
          <Link to="/signin">
            <li className="hover:text-[#fbc531]">Sign in</li>
          </Link>
        </ul>
      </div>
      {sideBar ? (
        <div className="bg-red-700 w-[300px]  absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-50">
          <RxCross2
            size={30}
            className="absolute top-5 right-5"
            onClick={() => setSideBar(!sideBar)}
          />
          <ul className="flex gap-12  flex-col   ">
            <li className="hover:text-[#fbc531]">Home</li>
            <li className="hover:text-[#fbc531]">About us</li>
            <li className="hover:text-[#fbc531]">Our Food</li>
            <li className="hover:text-[#fbc531]">Sign in</li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="flex gap-5 items-center ">
        <p>
          <GiHamburgerMenu
            size={30}
            className="sm:hidden block "
            onClick={() => setSideBar(!sideBar)}
          />
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
