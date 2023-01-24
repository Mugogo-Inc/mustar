import React from "react";
import Image from "next/image";
import { footerImages } from "./tours/data";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";

const Footer = () => {
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
  const date = new Date().getFullYear();
  return (
    <div className="bg-gray-900 text-white">
      <div>
        <h1 className="text-6xl block m-auto text-center p-4">
          Tours Zanzibar.
        </h1>
        <div className="flex my-5 justify-center">
          {" "}
          {footerImages.map((img, index) => (
            <Link href="#experiences" key={index} className="grid">
              <Image
                key={img}
                alt="alt"
                src={img}
                className="w-36  h-28 p-1 button-animation button-transition rounded-md"
              />
            </Link>
          ))}
        </div>
        <div className="flex gap-4 justify-center font-semibold">
          <Link href="/" className="">
            {t.home}
          </Link>
          <Link href="">{t.link1}</Link>
          <Link href="">{t.link2}</Link>
        </div>

        <Link
          href="https://mugogoinc.com/"
          className="block m-auto text-center p-4 font-semibold"
        >
          ©{date} , Mugogo Inc
        </Link>
      </div>
    </div>
  );
};

export default Footer;
