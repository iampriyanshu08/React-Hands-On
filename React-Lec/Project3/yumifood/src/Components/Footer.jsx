import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white  ">
        <div className="grid grid-cols-2 md:grid-cols-4  px-[10vw] py-10 ">
          <div className="w-[18vw]">
            <h2 className="font-bold md:text-[25px] text-[20px] mb-3">
              Just<span className="text-[#fbc531]">Eat</span>
            </h2>
            <p className="text-[15px] md:text-[20px] text-[gray] mb-5">
              © 2023 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          <div>
            <h2 className="md:text-[25px] text-[20px]   font-bold mb-3">
              Company
            </h2>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">About</p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Careers
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">Team</p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Swiggy One
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Swiggy Instamart
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Swiggy Genie
            </p>
          </div>
          <div>
            <h2 className="md:text-[25px] text-[20px]  font-bold mb-3">
              Contact us
            </h2>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Help & Support
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Partner with us
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Ride with us
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">Legal</p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Terms & Conditions
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Cookie Policy
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Privacy Policy
            </p>
          </div>
          <div>
            <h2 className="md:text-[25px] text-[20px] font-bold mb-3">
              We deliver to:
            </h2>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Bangalore
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Gurgaon
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Hyderabad
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">Delhi</p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">
              Mumbai
            </p>
            <p className="text-[gray] text-[15px] md:text-[20px] mb-2">Pune</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
