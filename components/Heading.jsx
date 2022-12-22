import React from "react";
const bg = false;
const Heading = ({ children }) => {
  return (
    <h1 className="block m-auto text-center text-2xl text-white p-2">
      {children}
    </h1>
  );
};

export default Heading;