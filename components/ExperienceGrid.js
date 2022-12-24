import React from "react";
import {
  data,
  safari,
  dhows,
  kuza,
  stonetown,
  kuzaa,
  stonetownn,
  dhow,
  safarii,
  nakupendaa,
} from "./tours/data";

import TransitionsModal from "./Modal";
import Link from "next/link";
import Gallery from "./Gallery";
import Heading from "./Heading";

const ExperienceGrid = () => {
  return (
    <div className=" text-4xl z-0 bg-gray-900">
      <h1 className="block m-auto text-center text-white p-4  ">
        Experiences{" "}
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-3  gap-1 m-3  bg-gray-900  ">
        <div className="m-3 relative ">
          <Heading>{nakupendaa}</Heading>
          <Gallery data={data} />

          <div className="block m-auto text-center absolute centered top-1/2 left-1/2">
            <TransitionsModal data={data} heading=" Experience Nakupenda" />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{safarii}</Heading>
          <Gallery data={safari} />
          <div className="block m-auto text-center absolute centered">
            <TransitionsModal data={safari} heading="Experience Safari Blue" />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{dhow}</Heading>
          <Gallery data={dhows} />
          <div className=" text-center absolute centered">
            <TransitionsModal
              data={dhows}
              heading="Experience Sunset Dhowing"
            />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{kuzaa}</Heading>
          <Gallery data={kuza} />
          <div className="centered absolute ">
            <TransitionsModal data={kuza} heading="Experience Kuza Caves" />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{stonetownn}</Heading>
          <Gallery data={stonetown} />
          <div className="block m-auto text-center absolute centered">
            <TransitionsModal data={stonetown} heading="Experience Stonetown" />
          </div>
        </div>
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
