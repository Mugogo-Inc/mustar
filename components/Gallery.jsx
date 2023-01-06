import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

const Gallery = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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
            <div
              className="max-h-96 max-w-80 m-auto block text-center p-2"
              key={index}
            >
              <Image
                alt="alt"
                loading="lazy"
                src={img}
                className="   rounded border-none outline-none overflow-hidden block m-auto text-center "
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Gallery;
