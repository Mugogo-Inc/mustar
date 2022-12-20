import Image from "next/image";
import React from "react";
import photo from "./images/gallery4.jpeg";
import { BsArrowRightShort } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="relative">
      <p className="absolute top-1/3 pl-3">
        <h1 className="text-3xl  text-white">
          Ready for an Experience? <br />
          Welcome to <br />
          <span className="text-4xl font-bold text-emerald-500">
            {" "}
            Zanzibar Experiences
          </span>
        </h1>
        <button className="first-letter:uppercase transition-colors rounded-none bg-emerald-500 cursor-pointer border-none  text-white p-2 mt-2 text-lg font-semibold hover:bg-emerald-600">
          {" "}
          Explore
          <BsArrowRightShort className="inline-block font-semibold text-2xl" />
        </button>
      </p>
      <Image src={photo} height={500} alt="jacugaz" />
    </div>
  );
};

export default Banner;
