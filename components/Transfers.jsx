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
    <div className="block p-6 m-auto text-center" id="transfer">
      <h1 className="p-2 text-4xl font-semibold text-gray-800">
        {t.travel} <span className="font-bold text-orange-500">{t.home}</span>{" "}
        {t.with}
        <br />
        {t.checkOut}r<span className="text-orange-500 "> {t.Amazing}</span>
      </h1>

      <div className="py-4">
        <h1 className="text-3xl font-semibold">
          {t.from} <br /> {t.to}
        </h1>
        <TransferComponent transfers={transfers} />
        <h1 className="p-3 text-3xl font-semibold">{t.beach}</h1>

        <TransferComponent transfers={beaches} width={true} />
      </div>
    </div>
  );
};

export default Transfers;
