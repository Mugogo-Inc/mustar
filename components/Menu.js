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
    <div className=" p-2 bg-gray-900 ">
      <h1 className="block m-auto text-center text-base-100 text-5xl p-2 font-semibold">
        {t.special}
      </h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper block m-auto text-center "
      >
        {t.menuInfo.map((item, index) => (
          <SwiperSlide key={index} className="  p-3 relative">
            <div className="text-3xl  p-3 ">
              <h1 className="p-2 kbd m-2 font-semibold">{item.heading}</h1>
              <p className="p-2 text-orange-500 font-semibold">
                {item.experiences}
              </p>
              <p className=" absolute top-0 right-2 badge p-2 badge-lg badge-warning">
                {item.info}
              </p>
              <div className="kbd">
                {" "}
                <h1>
                  <span className="font-semibold text-orange-500">
                    {item.price}
                  </span>{" "}
                  {t.perPerson}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="block m-auto text-center p-6" id="transfers">
        <h1 className="p-2 text-white font-sem text-4xl font-semibold">
          {t.services}
          <br />
          <span className="text-orange-500 "> {t.check}</span>
        </h1>
        <div className="my-5">
          <Link
            href="#transfer"
            className="rounded p-3 font-bold  border border-white bg-opacity-20  text-lg text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
          >
            {t.learnMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
