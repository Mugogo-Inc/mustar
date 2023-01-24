import React from "react";
import MyModal from "./Modal";
import Gallery from "./Gallery";
import { useRouter } from "next/router";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";

const Experiences = ({ experienceData }) => {
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
  const {
    safariBtn,
    nakupendaBtn,
    mnembaBtn,
    kuzaBtn,
    villageBtn,
    stonetownBtn,
    deepBtn,
    safaritzBtn,
    dolphinBtn,
    sunsetBtn,
    nakupendaParagraphs,
    nakupendaInfos,
    nakupendaIncluded,
    nakupendaExpect,
    nakupendaAdditional,
  } = t;
  return (
    <>
      {/* nakupenda tour */}
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.nakupenda.images} key={experience} />
            <MyModal
              info={nakupendaInfos}
              data={experience.nakupenda.images}
              paragraphs={nakupendaParagraphs}
              included={nakupendaIncluded}
              expect={nakupendaExpect}
              additional={nakupendaAdditional}
              tour={experience.nakupenda.nakupenda}
              gallery={experience.nakupenda.gallery}
              modalBtn={nakupendaBtn}
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
              info={t.safariInfos}
              data={experience.safari.images}
              paragraphs={t.safariParagraphs}
              included={t.safariIncluded}
              expect={t.safariExpect}
              additional={t.safariAdditional}
              tour={experience.safari.safari}
              gallery={experience.safari.gallery}
              modalBtn={safariBtn}
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
              info={t.kuzaInfos}
              data={experience.kuza.images}
              paragraphs={t.kuzaParagraphs}
              included={t.kuzaIncluded}
              expect={t.kuzaExpect}
              additional={t.kuzaAdditional}
              tour={experience.safari.safari}
              gallery={experience.kuza.gallery}
              modalBtn={kuzaBtn}
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
              info={t.dhowInfos}
              data={experience.sunset.images}
              paragraphs={t.dhowParagraphs}
              included={t.dhowIncluded}
              expect={t.dhowExpect}
              additional={t.dhowAdditional}
              tour={experience.sunset.sunset}
              gallery={experience.sunset.gallery}
              modalBtn={sunsetBtn}
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
              info={t.stonetownInfos}
              data={experience.stonetown.images}
              paragraphs={t.stonetownParagraphs}
              included={t.stonetownIncluded}
              expect={t.stonetownExpect}
              additional={t.stonetownAdditional}
              tour={experience.stonetown.stonetown}
              gallery={experience.stonetown.gallery}
              modalBtn={stonetownBtn}
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
              gallery={experience.mnemba.gallery}
              modalBtn={mnembaBtn}
            />
          </div>
        ))}
      </div>
      {/* village */}
      <div className="relative">
        {experienceData?.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.village.images} key={experience} />
            <MyModal
              info={experience.village.info}
              data={experience.village.images}
              heading={experience.village.Heading}
              paragraphs={experience.village.paragraphs}
              included={experience.village.included}
              expect={experience.village.expectparagraph}
              additional={experience.village.additional}
              tour={experience.village.village}
              gallery={experience.village.gallery}
              modalBtn={villageBtn}
            />
          </div>
        ))}
      </div>
      {/* game deep diving */}
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.game.images} key={experience} />
            <MyModal
              info={experience.game.info}
              data={experience.game.images}
              heading={experience.game.Heading}
              paragraphs={experience.game.paragraphs}
              included={experience.game.included}
              expect={experience.game.expectparagraph}
              additional={experience.game.additional}
              tour={experience.game.game}
              gallery={experience.village.gallery}
              modalBtn={deepBtn}
            />
          </div>
        ))}
      </div>
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.dolphin.images} key={experience} />
            <MyModal
              info={experience.dolphin.info}
              data={experience.dolphin.images}
              heading={experience.dolphin.Heading}
              paragraphs={experience.dolphin.paragraphs}
              included={experience.dolphin.included}
              expect={experience.dolphin.expectparagraph}
              additional={experience.dolphin.additional}
              tour={experience.dolphin.dolphin}
              gallery={experience.dolphin.gallery}
              modalBtn={dolphinBtn}
            />
          </div>
        ))}
      </div>
      {/* safari Tanzania */}
      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <Gallery data={experience.tanzania.images} key={experience} />
            <MyModal
              data={experience.tanzania.images}
              heading={experience.tanzania.Heading}
              paragraphs={experience.tanzania.paragraphs}
              tour={experience.tanzania.tanzania}
              gallery={experience.tanzania.gallery}
              modalBtn={safaritzBtn}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;
