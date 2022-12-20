import Image from "next/image";
import React from "react";
import photo from "./images/safaris.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="relative bg-gray-900 sm:flex">
      <p className="absolute top-1/3 pl-3">
        <div className="text-3xl  text-white">
          <h1>
            Ready for an Experience? <br />
            Welcome to <br />
            <span className="text-4xl font-bold text-orange-500">
              {" "}
              Zanzibar Experiences
            </span>
          </h1>
        </div>
        <button className=" border-2 p-3 mt-6 text-white">
          {" "}
          Explore Experiences
          <BsArrowRightShort className="inline-block font-bold text-3xl text-orange-600" />
        </button>
      </p>
      <Image src={photo} height="full" alt="jacugaz" />
    </div>
  );
};

export default Banner;
