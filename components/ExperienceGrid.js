import React from "react";
import { data } from "./images/data/img/data";
import Image from "next/image";

import TransitionsModal from "./Modal";

const ExperienceGrid = () => {
  return (
    <div className="m-4 text-4xl z-0">
      <h1 className="block m-auto text-center text-gray-900  ">Experiences </h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 grid-rows-3 gap-2  m-4 relative">
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
            <div className="block m-auto text-center">
              <TransitionsModal className="" heading={img.desc} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceGrid;
