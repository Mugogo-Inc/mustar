import React from "react";
import Experiences from "./Experiences";

import { experienceData } from "./tours/data";

const ExperienceGrid = () => {
  return (
    <>
      <div
        className="sm:grid sm:grid-cols-3 sm:gap-3 bg-gray-900 p-3 "
        id="experiences"
      >
        <Experiences experienceData={experienceData} />
      </div>
    </>
  );
};

export default ExperienceGrid;
