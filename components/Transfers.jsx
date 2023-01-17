import React from "react";
import { transfers, beaches } from "./tours/data";
import TransferComponent from "./TransferComponent";

const Transfers = () => {
  const width = true;
  return (
    <div className="block m-auto text-center p-6">
      <h1 className="p-2 text-gray-800 font-sem text-4xl font-semibold">
        We also offer transfer services across the island at an affordable rate
        <br />
        <span className="text-orange-500 "> Check out our Amazing prices</span>
      </h1>

      <div className="py-4">
        <h1 className="text-3xl font-semibold">
          From Airport/ Ferry <br /> to
        </h1>
        <TransferComponent transfers={transfers} />
        <h1 className="text-3xl font-semibold p-3">Beach to Beach</h1>

        <TransferComponent transfers={beaches} width={true} />
      </div>
    </div>
  );
};

export default Transfers;
