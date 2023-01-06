import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";

const ModalGallery = ({ data }) => {
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" absolute left-3 top-1/2 bg-white opacity-50 z-40 px-4 py-2 rounded-3xl"
        onClick={onClick}
      >
        <ArrowBackIos className="" />
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-3 top-1/2 bg-white opacity-50 px-5 rounded-3xl py-2 "
        onClick={onClick}
      >
        <ArrowForwardIosIcon className=" " />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div>
        <Slider {...settings}>
          {data.map((img, index) => (
            <div className="m-auto block text-center p-2" key={index}>
              <Image
                alt="alt"
                loading="lazy"
                src={img}
                className="rounded border-none outline-none overflow-hidden block m-auto text-center mb-6 "
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ModalGallery;
