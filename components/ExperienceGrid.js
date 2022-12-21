import React from "react";
import { data } from "./images/data/img/data";
import Image from "next/image";
import { RxArrowRight } from "react-icons/rx";

const ExperienceGrid = () => {
  return (
    <div className="m-4 text-4xl z-0">
      <h1 className="block m-auto text-center">Experiences </h1>
      <div className="grid grid-cols-2 grid-rows-3 gap-2  m-4">
        {data.map((img) => (
          <div key={img.id} className="z-0 relative">
            <Image
              key={img.id}
              height=""
              width=""
              alt="msaki"
              src={img.img}
              className="rounded  z-0 md:w-96 col-span-2"
            />
            <RxArrowRight className="absolute  bottom-1/2 text-3xl left-1/2 font-bold text-white hover:text-orange-500 cursor-pointer " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceGrid;
