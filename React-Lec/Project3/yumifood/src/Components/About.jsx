import React from "react";

const About = () => {
  return (
    <>
      <div className="text-gray-600 body-font w-[80%] mx-auto mt-[100px]">
        <div className="px-[16px]">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium mt-8 text-gray-900">
            Boosting <span className="text-[#fbc531]">accessibility</span> for
            customers
          </h2>
          <p className="mb-8 leading-relaxed text-[20px]">
            Our delivery service is reaching more and more cities. We are
            actively growing our services - table reservation, Zomato for
            Enterprise and are continuing to power Feeding India. Quality
            Improving quality of food We are committed to nurturing a neutral
            platform and are helping food establishments maintain high standards
            through Hyperpure. Food Hygiene Ratings is a coveted mark of quality
            among our restaurant partners.
          </p>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16  md:mb-0 text-center items-center ">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Who are we?
            </h2>
            <p className="mb-8 leading-relaxed">
              Launched in 2010, Our technology platform connects customers,
              restaurant partners and delivery partners, serving their multiple
              needs. Customers use our platform to search and discover
              restaurants, read and write customer generated reviews and view
              and upload photos, order food delivery, book a table and make
              payments while dining-out at restaurants. On the other hand, we
              provide restaurant partners with industry-specific marketing tools
              which enable them to engage and acquire customers to grow their
              business while also providing a reliable and efficient last mile
              delivery service. We also operate a one-stop procurement solution,
              Hyperpure, which supplies high quality ingredients and kitchen
              products to restaurant partners. We also provide our delivery
              partners with transparent and flexible earning opportunities.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="https://b.zmtcdn.com/web_assets/4c4754484b185afd6d88e357de72f7de1563874934.jpeg?output-format=webp"
              className="object-cover  object-center rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
