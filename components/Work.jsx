import React from "react";
import WorkCard from "./WorkCard";
import { services } from "./tours/data";
import Heading from "./Heading";

const flow = false;

const Work = ({}) => {
  return (
    <div className=" mt-4 p-4">
      <Heading>
        <span className="text-gray-900 text-4xl">What We Do</span>
      </Heading>
      <div className="">
        {services.map((item, index) => (
          <div
            key={index}
            className="sm:flex flex-row-reverse sm:justify-center sm:items-center"
          >
            <WorkCard key={index} heading={item.btnInfo} img={item.img} />
            <div className="block  m-auto text-center  w-1/2">
              <h1 className="block m-auto text-center text-2xl ">
                {item.service}
              </h1>
              <p className="p-4">{item.desc}</p>
              <button className="text-white bg-gray-900  sm:block hidden text-center m-auto  shadow-2xl p-3 border border-white hover:border-orange-500 button-animation">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
