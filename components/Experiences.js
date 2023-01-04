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
              included={experience.nakupenda.included}
              expect={experience.nakupenda.expectparagraph}
              additional={experience.nakupenda.additional}
              tour={experience.nakupenda.nakupenda}
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
              included={experience.safari.included}
              expect={experience.safari.expectparagraph}
              additional={experience.safari.additional}
              tour={experience.safari.safari}
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
              included={experience.safari.included}
              expect={experience.safari.expectparagraph}
              additional={experience.safari.additional}
              tour={experience.safari.safari}
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
              included={experience.safari.included}
              expect={experience.safari.expectparagraph}
              additional={experience.safari.additional}
              tour={experience.safari.safari}
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
              included={experience.safari.included}
              expect={experience.safari.expectparagraph}
              additional={experience.safari.additional}
              tour={experience.safari.safari}
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
              included={experience.safari.included}
              expect={experience.safari.expectparagraph}
              additional={experience.safari.additional}
              tour={experience.safari.safari}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;
