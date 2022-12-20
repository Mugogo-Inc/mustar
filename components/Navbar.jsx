import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 relative">
      <div className="flex-none"></div>
      <div className="flex-1">
        <button
          className={isOpen ? "hidden" : "btn btn-ghost normal-case text-xl"}
        >
          Zanzibar
        </button>
      </div>

      <div
        className={
          isOpen
            ? " bg-base-200 border rounded-md border-green-400 w-full"
            : " hidden sm:flex  "
        }
      >
        <div
          className={
            isOpen
              ? " block  p-8 h-80 m-auto text-center text-2xl sm:text-base bg-base-200 sm:bg-base-100"
              : "hidden sm:flex"
          }
        >
          <button className=" btn-ghost :hover: shadow-inner sm:hidden absolute bottom-10">
            {" "}
            <RxCross2 onClick={() => setIsOpen(!isOpen)} />
          </button>
          <Link href=" " className={isOpen ? "block my-4 " : " m-2"}>
            Learn More
          </Link>
          <Link href="" className={isOpen ? "block my-4 " : " m-2"}>
            Services
          </Link>
          <Link
            href=""
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "block my-4 " : " m-2"}
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex-none sm:hidden">
        <button
          className={isOpen ? "hidden " : "btn btn-square btn-ghost"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
