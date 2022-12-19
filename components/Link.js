import React from "react";
import Link from "next/link";

const LinkTag = ({ children, href, isBlock }) => {
  return (
    <Link className=" block m-auto btn-ghost rounded-sm p-2" href={href}>
      {children}
    </Link>
  );
};

export default LinkTag;
