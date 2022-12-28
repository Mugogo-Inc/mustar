import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

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

export const getStaticProps = async () => {
  const API_URL = "http://localhost:5000/experiences";
  const request = await fetch(API_URL);
  const experiences = await request.json();
  return { props: { experiences } };
};
const index = ({ experiences }) => {
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
        {experiences.map((item) => (
          <div key={item.id}>
            <div>
              {item.title}

              <div key={index} className="grid grid-cols-3">
                <Slider {...settings}>
                  {item.image.map((image) => (
                    <Image
                      src={image}
                      key={index}
                      height={200}
                      width={100}
                      alt="ego kills"
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
