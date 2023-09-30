/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaPersonHiking } from "react-icons/fa6";
import ServiceCircle from "./component/ServiceCircle";
import { BiAccessibility } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const AccessibleTourism = () => {
  return (
    <>
      <div className=" bg-neutral-200 py-7 pt-32 ">
        <div>
          <h3 className="px-6 font-bold text-4xl text-green-500 text-center  ">
          <span className="nepal">Nepal</span>
            <span className="ease">EASE</span>
          </h3>
          <p className="text-center mt-2 font-medium text-xl">
            Experience the best of the Nepal
          </p>
        </div>
        <section className="border  flex  px-7 gap-8 mt-14">
          <p className="block w-1/2 font-normal text-xl px-9 leading-8  text-neutral-800">
            Explore the magic that lies beyond the ordinary. Discover Nepal's
            hidden treasures, vibrant cultures, and breathtaking landscapes that
            transform everyday moments into unforgettable experiences. Explore
            the magic that lies beyond the ordinary. Discover Nepal's hidden
            treasures, vibrant cultures, and breathtaking landscapes that
            transform everyday moments into unforgettable experiences. Explore
            the magic that lies beyond the ordinary. Discover Nepal's hidden
          </p>
          <section className="w-1/2 py-3 items-center grid  grid-cols-2 gap-5">
            <div className="flex gap-3">
              <BsShieldFillCheck className="text-green-600 text-3xl" />{" "}
              <span className="text-xl font-medium">Professional Guides</span>
            </div>
            <div className="flex gap-3">
              <BsShieldFillCheck className="text-green-600 text-3xl" />{" "}
              <span className="text-xl font-medium">Professional Guides</span>
            </div>
            <div className="flex gap-3">
              <BsShieldFillCheck className="text-green-600 text-3xl" />{" "}
              <span className="text-xl font-medium">Professional Guides</span>
            </div>
            <div className="flex gap-3">
              <BsShieldFillCheck className="text-green-600 text-3xl" />{" "}
              <span className="text-xl font-medium">Professional Guides</span>
            </div>
            <div className="flex gap-3">
              <BsShieldFillCheck className="text-green-600 text-3xl" />{" "}
              <span className="text-xl font-medium">Professional Guides</span>
            </div>
            <div className="flex gap-3">
              <BsShieldFillCheck className="text-green-600 text-3xl" />{" "}
              <span className="text-xl font-medium">Professional Guides</span>
            </div>
          </section>
        </section>
        <section className="flex mt-16 gap-4 justify-around items-center w-full   px-6">
          <ServiceCircle Icon={FaPersonHiking} title={" Local Guides"} />

          <ServiceCircle Icon={BiAccessibility} title={"Accessibility"} />
          <ServiceCircle Icon={FaHeart} title={"Top Picks"} />
          <ServiceCircle Icon={FaCommentDots} title={"Intergrated Chat"} />
        </section>
      </div>
    </>
  );
};

export default AccessibleTourism;
