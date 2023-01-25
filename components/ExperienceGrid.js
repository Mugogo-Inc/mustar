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
    <>
      <div
        className="sm:grid sm:grid-cols-3 sm:gap-3 bg-gray-900 p-3 "
        id="experiences"
      >
        <h1 className="p-4 text-4xl text-orange-500 block m-auto text-center font-semibold">
          {t.ourExperiences}
        </h1>
        <Experiences experienceData={experienceData} />
      </div>
    </>
  );
};

export default ExperienceGrid;
