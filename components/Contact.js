import React, { useEffect } from "react";
import { useRouter } from "next/router";
import fr from "./locales/fr";
import de from "./locales/de";
import en from "./locales/en";

const Contact = () => {
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
    <div className="block m-auto text-center p-4 bg-gray-900" id="contact">
      <div>
        <h1 className="text-4xl p-3 text-white">{t.link3}</h1>
        <iframe
          src="https://whatsform.com/cTVIve"
          width="100%"
          height="600"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
