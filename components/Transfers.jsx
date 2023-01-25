import React from "react";
import { transfers, beaches } from "./tours/data";
import TransferComponent from "./TransferComponent";
import { useRouter } from "next/router";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";

const Transfers = () => {
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
    <div className="block m-auto text-center p-6" id="transfer">
      <h1 className="p-2 text-gray-800  text-4xl font-semibold">
        {t.travel} <span className="font-bold text-orange-500">{t.home}</span>{" "}
        {t.with}
        <br />
        {t.checkOut}r<span className="text-orange-500 "> {t.Amazing}</span>
      </h1>

      <div className="py-4">
        <h1 className="text-3xl font-semibold">
          {t.from} <br /> {t.to}
        </h1>
        <TransferComponent transfers={transfers} price={t.price} />
        <h1 className="text-3xl font-semibold p-3">{t.beach}</h1>

        <TransferComponent transfers={beaches} width={true} price={t.price} />
      </div>
    </div>
  );
};

export default Transfers;
