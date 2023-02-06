import React from "react";

const TransferComponent = ({ transfers, width }) => {
  return (
    <div className={width ? "px-1 " : "p-4"}>
      {transfers.map((item, index) => (
        <p
          key={index}
          className="flex items-center justify-center flex-1 text-lg font-bold "
        >
          <h1 className={width ? "w-52" : "w-32 "}>{item.to}</h1>
        </p>
      ))}
    </div>
  );
};

export default TransferComponent;
