import React from "react";
import WorkCard from "./WorkCard";
import { data } from "./tours/data";
import Heading from "./Heading";

const Work = () => {
  return (
    <div className=" mt-4 p-4">
      <Heading heading="What We Do" />
      <div className="">
        {data.map((item) => (
          <WorkCard key={item.id} heading={item.btnInfo} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Work;
