import React from "react";
import Image from "next/image";
import { footerImages } from "./tours/data";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div>
        <h1 className="text-6xl block m-auto text-center p-4">
          Visit Zanzibar.
        </h1>
        <div className="flex">
          {" "}
          {footerImages.map((img) => (
            <Link href="#experiences" key={img} className="grid">
              <Image
                key={img}
                alt="alt"
                src={img}
                className="w-36  h-28 p-1 button-animation button-transition rounded"
              />
            </Link>
          ))}
        </div>
        <div className="flex gap-4 justify-center font-semibold">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="">Experiences</Link>
          <Link href="">Services</Link>
        </div>

        <Link
          href="https://mugogoinc.com/"
          className="block m-auto text-center p-4 font-semibold"
        >
          ©{date} , Mugogo Inc
        </Link>
      </div>
    </div>
  );
};

export default Footer;
