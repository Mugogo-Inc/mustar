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
    speed: 400,
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
          {data.map((img) => (
            <Image
              alt="alt"
              height=""
              loading="lazy"
              src={img.img}
              key={img.id}
              className="max-h-90 rounded border-none outline-none overflow-hidden"
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Gallery;
