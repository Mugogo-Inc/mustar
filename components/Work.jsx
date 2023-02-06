import React from "react";
import WorkCard from "./WorkCard";
import { tours } from "./tours/data";
import Heading from "./Heading";
import { useRouter } from "next/router";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";

const Work = () => {
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
    <div className="p-4 mt-4 " id="work">
      <Heading>
        <span className="text-4xl font-bold text-gray-900"> {t.menu} </span>
      </Heading>
      <div className="">
        {tours.map((item, index) => (
          <div
            key={index}
            className="flex-row items-center justify-center sm:flex sm:justify-center sm:items-center md:m-5"
          >
            <WorkCard key={index} heading={item.btnInfo} img={item.img} />
            <div className="block m-auto text-center ">
              <h1 className="block m-auto text-2xl text-center ">
                {item.tour}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
