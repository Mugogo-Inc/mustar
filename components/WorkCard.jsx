import React from "react";
import Image from "next/image";

const WorkCard = ({ img }) => {
  return (
    <div className="p-3 m-3  sm:flex">
      <div className="block text-center m-auto relative">
        <div className="flex md:w-1/2 gap-2">
          <Image
            src={img}
            alt="tatoo"
            className="md:rounded-none rounded h-60 sm:w-96 sm:h-fit w-full "
          />
          <Image
            src={img}
            alt="tatoo"
            className="md:rounded-none rounded h-60 sm:h-fit w-full md:w-96 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
