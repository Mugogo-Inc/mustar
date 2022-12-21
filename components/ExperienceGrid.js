import React from "react";
import { data } from "./tours/data";
import Image from "next/image";

import TransitionsModal from "./Modal";
import Link from "next/link";
import Gallery from "./Gallery";

const ExperienceGrid = () => {
  return (
    <div className=" text-4xl z-0 bg-gray-900">
      <h1 className="block m-auto text-center text-white p-4  ">
        Experiences{" "}
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-3 grid-rows-2 gap-4  m-4 bg-gray-900">
        {data.map((img) => (
          <div
            key={img.id}
            className=" flex flex-col justify-center text-center m-4"
          >
            <Gallery />
            <TransitionsModal heading={img.btnInfo} />
          </div>
        ))}
      </div>
      <div className="pb-5">
        <Link
          href="/experiences"
          className=" block m-auto text-base text-center text-white border border-white w-24 p-2 mb-5 "
        >
          {" "}
          View More
        </Link>
      </div>
    </div>
  );
};

export default ExperienceGrid;
