import React from "react";
import MyModal from "./Modal";
import Gallery from "./Gallery";

const Experiences = ({ experienceData }) => {
  return (
    <>
      {/* nakupenda tour */}
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
      {/* Safari Blue Island */}
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
      {/* Kuza Caves */}
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.kuza.images} key={experience} />
            <MyModal
              info={experience.kuza.info}
              data={experience.kuza.images}
              heading={experience.kuza.Heading}
              paragraphs={experience.safari.paragraphs}
              included={experience.safari.included}
              expect={experience.safari.expectparagraph}
              additional={experience.safari.additional}
              tour={experience.safari.safari}
            />
          </div>
        ))}
      </div>
      {/* sunset Dhow */}
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.sunset.images} key={experience} />
            <MyModal
              info={experience.sunset.info}
              data={experience.sunset.images}
              heading={experience.sunset.Heading}
              paragraphs={experience.sunset.paragraphs}
              included={experience.sunset.included}
              expect={experience.sunset.expectparagraph}
              additional={experience.sunset.additional}
              tour={experience.sunset.sunset}
            />
          </div>
        ))}
      </div>
      {/* stonetown */}
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.stonetown.images} key={experience} />
            <MyModal
              info={experience.stonetown.info}
              data={experience.stonetown.images}
              heading={experience.stonetown.Heading}
              paragraphs={experience.stonetown.paragraphs}
              included={experience.stonetown.included}
              expect={experience.stonetown.expectparagraph}
              additional={experience.stonetown.additional}
              tour={experience.stonetown.stonetown}
            />
          </div>
        ))}
      </div>
      {/* Mnemba experience */}
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.mnemba.images} key={experience} />
            <MyModal
              info={experience.mnemba.info}
              data={experience.mnemba.images}
              heading={experience.mnemba.Heading}
              paragraphs={experience.mnemba.paragraphs}
              included={experience.mnemba.included}
              expect={experience.mnemba.expectparagraph}
              additional={experience.mnemba.additional}
              tour={experience.mnemba.mnemba}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;
