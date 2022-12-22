import React from "react";
import WorkCard from "./WorkCard";
import { data } from "./tours/data";

const Work = () => {
  return (
    <div>
      <h1 className="block">g</h1>
      {data.map((item) => (
        <WorkCard key={item.id} heading={item.btnInfo} img={item.img} />
      ))}
    </div>
  );
};

export default Work;
