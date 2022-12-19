import React from "react";
import LinkTag from "./Link";

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
        <LinkTag href="/contact">Contact</LinkTag>
        <LinkTag href="/experiences">Experiences</LinkTag>
        <LinkTag href="/services">Services</LinkTag>
        <LinkTag href="/guides">Guides</LinkTag>
      </div>
      <div>
        <NavModal />
      </div>
    </div>
  );
};

export default Navbar;
