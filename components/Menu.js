import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { MenuItem } from "@mui/material";

// import required modules
import { Navigation } from "swiper";
import { menuInfo } from "./tours/data";
import Link from "next/link";

const Menu = () => {
  return (
    <div className=" p-2 bg-gray-900 ">
      <h1 className="block m-auto text-center text-base-100 text-5xl p-2 font-semibold">
        Special Offers
      </h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper block m-auto text-center "
      >
        {menuInfo.map((item, index) => (
          <SwiperSlide key={index} className="  p-3 relative">
            <div className="text-3xl  p-3 ">
              <h1 className="p-2 kbd m-2 font-semibold">{item.heading}</h1>
              <p className="p-2 text-orange-500 font-semibold">
                {item.experiences}
              </p>
              <p className=" absolute top-0 right-2 badge p-2 badge-lg badge-warning">
                {item.info}
              </p>
              <div className="kbd"> price :{item.price} per person</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="block m-auto text-center p-6" id="transfers">
        <h1 className="p-2 text-white font-sem text-4xl font-semibold">
          We also offer transfer services across the island at an affordable
          rate
          <br />
          <span className="text-orange-500 ">
            {" "}
            Check out our Amazing Catalogue
          </span>
        </h1>
        <div className="my-5">
          <Link
            href="#transfer"
            className="rounded p-3 font-bold  border border-white bg-opacity-20  text-lg text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
