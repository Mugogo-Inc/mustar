import React from "react";
import Experiences from "./Experiences";
import Gallery from "./Gallery";
import MyModal from "./Modal";
import { experienceData } from "./tours/data";

const ExperienceGrid = () => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-3 bg-gray-900 p-3 ">
      {/* nakupenda */}
      <Experiences experienceData={experienceData} />
    </div>
  );
};

export default ExperienceGrid;
