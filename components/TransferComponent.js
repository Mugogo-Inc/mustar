import React from "react";

const TransferComponent = ({ transfers, width }) => {
  return (
    <div className={width ? "px-1 " : "p-4"}>
      {transfers.map((item, index) => (
        <p
          key={index}
          className="text-lg font-bold flex justify-between items-center flex-1 "
        >
          <h1 className={width ? "w-52" : "w-32"}>{item.to}</h1>
          <h1>.....</h1>
          <h1 className="label">
            {" "}
            Price
            <span className="mx-2 badge p-3 border-none shadow-xl text-lg bg-orange-500 ">
              {item.price}
            </span>
          </h1>
        </p>
      ))}
    </div>
  );
};

export default TransferComponent;
