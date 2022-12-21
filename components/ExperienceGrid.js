import React from "react";
import { data } from "./images/data/img/data";
import Image from "next/image";

import TransitionsModal from "./Modal";

const ExperienceGrid = () => {
  return (
    <div className="m-4 text-4xl z-0">
      <h1 className="block m-auto text-center text-gray-900  ">Experiences </h1>
      <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-4  m-4 relative">
        {data.map((img) => (
          <>
            <div className="card card-compact sm:w-56 h-44  shadow-xl p-0 rounded-md bg-gray-900">
              <figure>
                <Image src={img.img} alt="Shoes" height="" width="" />
              </figure>

              <p>
                <TransitionsModal heading={img.desc} />
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ExperienceGrid;
