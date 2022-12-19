import React from "react";

import Link from "next/link";
import NavModal from "./NavModal";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 m-auto">
      <div className="flex-none"></div>
      <div className="flex-1">
        <Link href="/">Zanzibar</Link>
      </div>
      <div className="hidden sm:flex gap-2 ">
        <Link href="" className=" btn-ghost rounded-sm p-2">
          Phone
        </Link>
        <Link href="" className=" btn-ghost rounded-sm p-2">
          Experiences
        </Link>
        <Link href="" className=" btn-ghost rounded-sm p-2">
          Services
        </Link>
        <Link href="" className=" btn-ghost rounded-sm p-2">
          Ab
        </Link>
      </div>
      <div>
        <NavModal />
      </div>
    </div>
  );
};

export default Navbar;
