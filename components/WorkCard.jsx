import React from "react";
import Image from "next/image";

const WorkCard = ({ heading, img }) => {
  return (
    <div className="p-3 m-3 ">
      <div className="block text-center m-auto relative">
        <Image src={img} alt="tatoo" className="rounded h-60 w-full" />
        <h1 className=" text-3xl">{heading}</h1>
        <button className="absolute bottom-1/3 text-white block text-center m-auto left-32 font-bold p-3 border border-white hover:border-orange-500 hover:scale-100">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
