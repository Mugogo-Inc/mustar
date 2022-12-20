import Image from "next/image";
import React from "react";
import photo from "./images/gallery4.jpeg";

const Banner = () => {
  return (
    <div className="relative">
      <p className="absolute top-1/3 pl-3">
        <h1 className="text-3xl  text-white">
          Ready for an Experience? <br />
          Welcome to <br />
          <span className="text-4xl font-bold text-green-400">
            {" "}
            Zanzibar Experiences
          </span>
        </h1>
        <button className=" btn btn-success text-white rounded-md p-2 m-2">
          {" "}
          Explore
        </button>
      </p>
      <Image src={photo} height={500} alt="jacugaz" />
    </div>
  );
};

export default Banner;
