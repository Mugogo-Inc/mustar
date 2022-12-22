import React from "react";
const bg = false;
const Heading = ({ heading }) => {
  return (
    <h1
      className={
        bg
          ? "block m-auto text-center text-2xl text-white p-2"
          : "block m-auto text-center text-2xl text-gray-900 p-2 "
      }
    >
      {heading}
    </h1>
  );
};

export default Heading;
