import React from "react";
import Link from "next/link";
import {
  data,
  safari,
  dhows,
  kuza,
  stonetown,
  kuzaa,
  stonetownn,
  dhow,
  safarii,
  nakupendaa,
  descriptions,
} from "./tours/data";

import TransitionsModal from "./Modal";

import Gallery from "./Gallery";
import Heading from "./Heading";

const ExperienceGrid = () => {
  return (
    <div className=" text-4xl z-0 bg-gray-900">
      <h1 className="block m-auto text-center text-white p-4  ">
        Experiences{" "}
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-3  gap-1 m-3  bg-gray-900  ">
        <div className="m-3 relative ">
          <Heading>{nakupendaa}</Heading>
          <Gallery data={data} />

          <div className="block m-auto text-center absolute centered top-1/2 left-1/2">
            <TransitionsModal
              data={data}
              heading={descriptions.nakupenda_desc.heading}
              subheading={descriptions.nakupenda_desc.subheading}
              paragraph1={descriptions.nakupenda_desc.paragraph1}
              paragraph2={descriptions.nakupenda_desc.paragraph2}
              paragraph3={descriptions.nakupenda_desc.paragraph3}
              expect={descriptions.nakupenda_desc.expectparagraph}
              faq={descriptions.nakupenda_desc.FAQS}
              info1={descriptions.nakupenda_desc.info1}
              info2={descriptions.nakupenda_desc.info2}
              info3={descriptions.nakupenda_desc.info3}
              included1={descriptions.nakupenda_desc.included1}
              included2={descriptions.nakupenda_desc.included2}
              included3={descriptions.nakupenda_desc.included3}
              included4={descriptions.nakupenda_desc.included4}
              included5={descriptions.nakupenda_desc.included5}
              included6={descriptions.nakupenda_desc.included6}
              additionalinfo1={descriptions.nakupenda_desc.additional_info1}
              additionalinfo2={descriptions.nakupenda_desc.additional_info2}
              additionalinfo3={descriptions.nakupenda_desc.additional_info3}
              additionalinfo4={descriptions.nakupenda_desc.additional_info4}
              additionalinfo5={descriptions.nakupenda_desc.additional_info5}
              additionalinfo6={descriptions.nakupenda_desc.additional_info6}
              additionalinfo7={descriptions.nakupenda_desc.additional_info7}
              FAQ={descriptions.nakupenda_desc.question}
              FAQanswer={descriptions.nakupenda_desc.FAQanswer}
            />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{safarii}</Heading>
          <Gallery data={safari} />
          <div className="block m-auto text-center absolute centered">
            <TransitionsModal data={safari} heading="Experience Safari Blue" />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{dhow}</Heading>
          <Gallery data={dhows} />
          <div className=" text-center absolute centered">
            <TransitionsModal
              data={dhows}
              heading="Experience Sunset Dhowing"
            />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{kuzaa}</Heading>
          <Gallery data={kuza} />
          <div className="centered absolute ">
            <TransitionsModal data={kuza} heading="Experience Kuza Caves" />
          </div>
        </div>
        <div className="m-3 relative">
          <Heading>{stonetownn}</Heading>
          <Gallery data={stonetown} />
          <div className="block m-auto text-center absolute centered">
            <TransitionsModal data={stonetown} heading="Experience Stonetown" />
          </div>
        </div>
      </div>
      <div className="pb-5">
        <Link
          href="/experiences"
          className=" block m-auto text-base text-center text-white border border-white w-24 p-2 mb-5 "
        >
          {" "}
          View More
        </Link>
      </div>
    </div>
  );
};

export default ExperienceGrid;
