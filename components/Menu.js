import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";

// import required modules
import { Navigation } from "swiper";
import { menuInfo } from "./tours/data";
import Link from "next/link";

const Menu = () => {
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
    <div className="p-2 bg-gray-900 ">
      <h1 className="block p-2 m-auto text-5xl font-semibold text-center text-base-100">
        {t.special}
      </h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="block m-auto text-center mySwiper "
      >
        {t.menuInfo.map((item, index) => (
          <SwiperSlide key={index} className="relative p-3 ">
            <div className="p-3 text-3xl ">
              <h1 className="p-2 m-2 font-semibold kbd">{item.heading}</h1>
              <p className="p-2 font-semibold text-orange-500">
                {item.experiences}
              </p>
              <p className="absolute top-0 p-2 right-2 badge badge-lg badge-warning">
                {item.info}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="block p-6 m-auto text-center" id="transfers">
        <h1 className="p-2 text-4xl font-semibold text-white font-sem">
          {t.services}
          <br />
          <span className="text-orange-500 "> {t.check}</span>
        </h1>
        <div className="my-5">
          <Link
            href="#transfer"
            className="p-3 text-lg font-bold text-white border border-white rounded bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
          >
            {t.learnMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
