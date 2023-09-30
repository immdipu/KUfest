/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import clsx from "clsx";
import ExplorePlaces from "./ExplorePlaces";
import AccessibleTourism from "./AccessibleTourism";
import SupportAssistance from "./SupportAssistance";
import Link from "../../../node_modules/next/link";

const Home = () => {
  const [show, setShow] = useState("first");
  const [secondShow, setsecondShow] = useState("first");

  return (
    <div>
      <section className="flex">
        <section className="w-1/2 h-96 overflow-hidden  relative">
          <img
            src="https://www.sportsnepaltour.com/img/package/1805877046_1410766328kathmandu-pokhara-tour-001.gif"
            alt=""
          />
          <div className=" bg-transparent flex flex-col absolute inset-0">
            <section className="flex-1   border-red-600  flex flex-col justify-center  pl-10 bg-neutral-800 bg-opacity-60  ">
              <div className="w-3/5 ">
                {show === "first" && (
                  <p className="text-white block font-medium text-xl">
                    Explore the magic that lies beyond the ordinary. Discover
                    Nepal's hidden treasures, vibrant cultures, and breathtaking
                    landscapes that transform everyday moments into
                    unforgettable experiences.
                  </p>
                )}
                {show === "second" && (
                  <p className="text-white block font-medium text-xl">
                    Nepal holds a wealth of hidden gems waiting to be uncovered.
                    From pristine mountain villages to cultural wonders, embark
                    on a journey to unearth the secrets of this enchanting land.
                  </p>
                )}
                {show === "third" && (
                  <p className="text-white block font-medium text-xl">
                    Immerse yourself in the beauty of Nepal before you even set
                    foot in the country. Experience the grandeur of Nepal's
                    natural wonders through stunning 360° panoramas
                  </p>
                )}
                <div className=" w-full mt-5">
                  <Link href={"/view"} className="bg-blue-500 text-white px-4 rounded-full py-2">
                    Explore Here
                  </Link>
                </div>
              </div>
            </section>
            <section className="border-t border-neutral-100 border-opacity-70 h-20 bg-neutral-800 bg-opacity-30 flex">
              <button
                onClick={() => setShow("first")}
                className={clsx(
                  "text-sm text-white  border-r border-neutral-100 border-opacity-70 w-full",
                  show === "first" && "bg-neutral-800 bg-opacity-70"
                )}
              >
                Nepal, Where Ordinary <br /> Becomes Extraordinary
              </button>
              <button
                onClick={() => setShow("second")}
                className={clsx(
                  "text-sm text-white w-full border-r border-neutral-100 border-opacity-70 px-4",
                  show === "second" && "bg-neutral-800 bg-opacity-70"
                )}
              >
                Uncover Hidden Gems in Nepal
              </button>
              <button
                onClick={() => setShow("third")}
                className={clsx(
                  "text-sm text-white w-full px-4 ",
                  show === "third" && "bg-neutral-800 bg-opacity-70"
                )}
              >
                Explore 360&rsquo; Views of Nepal&rsquo;s Scenery
              </button>
            </section>
          </div>
        </section>

        {/* second template */}

        <section className="flex flex-col  w-1/2">
          <div className="flex-1">
            <h2 className="text-center font-semibold mt-8 text-3xl text-green-500">
              Enriching Lives, Promoting Inclusion
            </h2>
            <div className="w-[calc(100%-24px)] relative px-6 opacity-50">
              <img
                src="/FrontpageImage.png"
                alt=""
                className="w-full absolute   object-cover"
              />
            </div>
          </div>
          <section className="border-t border-neutral-100 border-opacity-70 h-20 bg-neutral-800 bg-opacity-30 flex">
            <button
              onClick={() => setsecondShow("first")}
              className={clsx(
                "text-sm text-white  border-r border-neutral-100 border-opacity-70 w-full",
                secondShow === "first" && "bg-neutral-800 bg-opacity-70"
              )}
            >
              Inclusion makes every journey more enriching
            </button>
            <button
              onClick={() => setsecondShow("second")}
              className={clsx(
                "text-sm text-white w-full border-r border-neutral-100 border-opacity-70 px-4",
                secondShow === "second" && "bg-neutral-800 bg-opacity-70"
              )}
            >
              Unlock endless travel possibilities
            </button>
            <button
              onClick={() => setsecondShow("third")}
              className={clsx(
                "text-sm text-white w-full px-4 ",
                secondShow === "third" && "bg-neutral-800 bg-opacity-70"
              )}
            >
              Embrace the world's beauty through accesible exploration
            </button>
          </section>
        </section>
      </section>
      <section>
        <AccessibleTourism />
      </section>
      <section id="places" className="scroll-smooth">
        <ExplorePlaces />
      </section>
      <section>
        <SupportAssistance />
      </section>
    </div>
  );
};

export default Home;
