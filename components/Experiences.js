import React from "react";
import MyModal from "./Modal";
import Gallery from "./Gallery";

const Experiences = ({ experienceData }) => {
  return (
    <>
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.nakupenda.images} key={experience} />
            <MyModal
              info={experience.nakupenda.info}
              data={experience.nakupenda.images}
              heading={experience.nakupenda.Heading}
              paragraphs={experience.nakupenda.paragraphs}
            />
          </div>
        ))}
      </div>
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.safari.images} key={experience} />
            <MyModal
              info={experience.safari.info}
              data={experience.safari.images}
              heading={experience.safari.Heading}
              paragraphs={experience.safari.paragraphs}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;
