import React from "react";
import { transfers, beaches } from "./tours/data";
import TransferComponent from "./TransferComponent";

const Transfers = () => {
  return (
    <div className="block m-auto text-center p-6" id="transfer">
      <h1 className="p-2 text-gray-800  text-4xl font-semibold">
        Travel like <span className="font-bold text-orange-500">home</span> with
        us
        <br />
        Check out our<span className="text-orange-500 "> Amazing prices</span>
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
