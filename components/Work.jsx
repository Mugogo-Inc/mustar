import React from "react";
import WorkCard from "./WorkCard";
import { data } from "./tours/data";

const Work = () => {
  return (
    <>
      {data.map((item) => (
        <WorkCard key={item.id} heading={item.btnInfo} img={item.img} />
      ))}
    </>
  );
};

export default Work;
