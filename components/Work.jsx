import React from "react";
import WorkCard from "./WorkCard";
import { data } from "./tours/data";
import Heading from "./Heading";

const l = ["1", "2", "3", "4", "5"];

const Work = () => {
  return (
    <div className=" mt-4 p-4">
      <Heading>
        <span className="text-gray-900 text-4xl">What We Do</span>
      </Heading>
      <div className="">
        {data.map((item) => (
          <div key={item.id}>
            <WorkCard key={item.id} heading={item.btnInfo} img={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
