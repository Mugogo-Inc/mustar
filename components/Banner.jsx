import React, { useEffect, useState } from "react";
import Image from "next/image";
import photo from "./tours/nakupenda/nakupenda2.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const Banner = () => {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return (
    <div className=" block sm:flex flex-row bg-gray-900 gap-6">
      <div className="sm:w-1/2 relative">
        <div className=" block absolute sm:top-20 left-3 text-3xl  text-white">
          <h1 className="block z-40 mt-28 text-4xl lg:text-6xl sm:mt-0 font-medium">
            Ready for an <br />
            <span className="text-5xl lg:text-7xl text-orange-500 font-semibold">
              Experience
            </span>{" "}
            <br />
            <span className="font-bold text-4xl">Karibu</span> <br />
            <span className="text-6xl lg:text-8xl text-orange-600 font-bold">
              Zanzibar
            </span>
          </h1>
          <button className="text-lg border-2 border-white rounded flex justify-center items-center outline-none p-2 mt-7 cursor-pointer sm:mt-10 button-animation">
            Explore Experiences
            <BsArrowRightShort className="inline-block ml-2 text-2xl font-bold text-orange-600" />
          </button>
        </div>
      </div>

      <div className=" h-full ">
        {" "}
        <Image
          src={photo}
          alt="glow up"
          height={900}
          width="full"
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
