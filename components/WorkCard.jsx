import React from "react";
import Image from "next/image";

const WorkCard = ({ heading, img }) => {
  return (
    <div className="p-3 m-3  sm:flex">
      <div className="sm:w-1/2">
        <h1>PassionFruit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          accusantium nisi qui consequuntur dolore ea fugit repudiandae
          laboriosam cumque nam.
        </p>
      </div>
      <div className="block text-center m-auto relative">
        <Image src={img} alt="tatoo" className="rounded h-60 sm:h-fit w-full" />
        <h1 className=" text-3xl">{heading}</h1>
        <button className="absolute top-1/2 left-1/2 text-white block text-center m-auto  font-bold p-3 border border-white hover:border-orange-500 centered">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
