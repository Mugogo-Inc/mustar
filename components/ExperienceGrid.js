import React from "react";
import { data } from "./images/data/img/data";
import Image from "next/image";

import TransitionsModal from "./Modal";
import Link from "next/link";

const ExperienceGrid = () => {
  return (
    <div className=" text-4xl z-0 bg-gray-900">
      <h1 className="block m-auto text-center text-white p-4  ">
        Experiences{" "}
      </h1>
      <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4  m-4 bg-gray-900">
        {data.map((img) => (
          <div
            key={img.id}
            className=" flex flex-col justify-center text-center"
          >
            <Image height={200} width="" alt="gg" src={img.img} />

            <TransitionsModal heading={img.desc} />
          </div>
        ))}
      </div>
      <Link
        href="/experiences"
        className=" block m-auto text-base text-center text-white border border-white w-24 p-2 "
      >
        {" "}
        View More
      </Link>
    </div>
  );
};

export default ExperienceGrid;
