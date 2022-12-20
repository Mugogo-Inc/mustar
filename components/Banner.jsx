import React, { useEffect, useState } from "react";
import Image from "next/image";
import photo from "./images/safaris.jpg";
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
          <h1 className="block z-40 mt-28 text-4xl sm:mt-0 font-medium">
            Ready for an{" "}
            <span className="text-5xl text-orange-500 font-semibold">
              Experience
            </span>{" "}
            <br />
            <span className="font-bold text-4xl">Karibu</span> <br />
            <span className="text-6xl text-orange-600 font-bold">Zanzibar</span>
          </h1>
          <button className="text-lg border-2 border-white outline-none p-2 mt-7 cursor-pointer ">
            Explore Experiences
            <BsArrowRightShort className="inline-block ml-2 text-2xl font-bold text-orange-600" />
          </button>
        </div>
      </div>

      <div className=" ">
        {" "}
        <Image src={photo} alt="glow up" height={900} width="full" />
      </div>
    </div>
  );
};

export default Banner;
