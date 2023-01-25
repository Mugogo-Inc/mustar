import React from "react";
import Experiences from "./Experiences";

import { experienceData } from "./tours/data";
import { useRouter } from "next/router";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";

const ExperienceGrid = () => {
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "en"
      ? en
      : locale === "de"
      ? de
      : locale === "fr"
      ? fr
      : locale === en;
  return (
    <div id="experiences" className="bg-gray-900">
      <h1 className="block m-auto text-center text-base-100 text-5xl  font-semibold">
        {t.ourExperiences}
      </h1>
      <div className="sm:grid sm:grid-cols-3 sm:gap-3 bg-gray-900  ">
        <Experiences experienceData={experienceData} />
      </div>
    </div>
  );
};

export default ExperienceGrid;
