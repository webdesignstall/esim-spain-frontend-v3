import Link from "next/link";
import React from "react";
import CountryContainer from "../containers/CountryContainer";

const CountrySection = () => {
  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[80%] lg:max-w-[85%]  mx-auto xl:px-10 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-24 mt-28 lg:rounded-3xl relative"
    >
      <h2 className="lg:text-5xl text-3xl lg:leading-[60px] font-medium text-white text-center py-10 mb-20">
        Explore Our Range of <br /> Data eSIMs for 190+ Destinations
      </h2>
      <CountryContainer limit={15} />
      <div className="flex justify-center items-center">
        <Link href={"/countries"}>
          <button className="bg-[#C09D5E] rounded-full font-medium mb-10 -mt-5 px-6 py-3 flex gap-2 items-center text-white">
            Show 150+ countries
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountrySection;
