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
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-3  gap-4  m-4 bg-gray-900">
        <div className="m-3">
          <Heading>{nakupendaa}</Heading>
          <Gallery data={data} />

          <div className="block m-auto text-center">
            <TransitionsModal data={data} heading=" Experience Nakupenda" />
          </div>
        </div>
        <div className="m-3">
          <Heading>{safarii}</Heading>
          <Gallery data={safari} />
          <div className="block m-auto text-center">
            <TransitionsModal data={safari} heading="Experience Safari Blue" />
          </div>
        </div>
        <div className="m-3">
          <Heading>{dhow}</Heading>
          <Gallery data={dhows} />
          <div className="block m-auto text-center">
            <TransitionsModal
              data={dhows}
              heading="Experience Sunset Dhowing"
            />
          </div>
        </div>
        <div className="m-3">
          <Heading>{kuzaa}</Heading>
          <Gallery data={kuza} />
          <div className="block m-auto text-center">
            <TransitionsModal data={kuza} heading="Experience Kuza" />
          </div>
        </div>
        <div className="m-3">
          <Heading>{stonetownn}</Heading>
          <Gallery data={stonetown} />
          <div className="block m-auto text-center">
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
