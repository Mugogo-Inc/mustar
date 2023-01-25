import React from "react";
import Image from "next/image";

const WorkCard = ({ img }) => {
  return (
    <div className="p-3  ">
      <div className=" m-auto relative">
        <div className="flex  gap-2">
          <Image
            src={img}
            alt="tatoo"
            className="md:rounded-none rounded h-60 sm:h-96  sm:w-96 w-80 md:w-96 block m-auto  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
