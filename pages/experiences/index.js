import React from "react";
import Image from "next/image";

export const getStaticProps = async () => {
  const API_URL = "http://localhost:5000/experiences";
  const request = await fetch(API_URL);
  const experiences = await request.json();
  return { props: { experiences } };
};
const index = ({ experiences }) => {
  return (
    <div>
      {experiences.map((item) => (
        <div key={item.id}>
          <div>
            {item.title}

            <div key={index} className="grid grid-cols-3">
              {item.image.map((image) => (
                <Image
                  src={image}
                  key={index}
                  height={200}
                  width={100}
                  alt="ego kills"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
