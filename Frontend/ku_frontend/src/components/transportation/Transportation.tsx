/* eslint-disable @next/next/no-img-element */
import React from "react";

const Transportation = () => {
  return (
    <div className="">
      <div className="  mt-28">
        <h3 className="font-semibold  text-neutral-800 text-2xl text-center ">
          Discover Accessible Transportation Services
        </h3>
      </div>
      <section className="mt-20 py-4 px-16 my-36">
        <div className="">
          <h3 className="font-semibold text-2xl text-green-600">
            1. sajha yatayat
          </h3>
        </div>
        <section className="mt-8 flex items-start ">
          <div className="w-1/2">
            <p className="text-lg">
              Sajha Yatayat helps people with disabilities by offering special
              buses. These buses are easy to get on, even if you use a
              wheelchair or have mobility challenges. Sajha Yatayat cares about
              making sure everyone can ride comfortably and safely.
            </p>
            <ul className="mt-3">
              <li className="list-disc text-base text-neutral-600">
                Sajha Yatayat offers accessible buses in Kathmandu Valley,
                including Kathmandu, Lalitpur, and Bhaktapur urban areas.
              </li>
              <li className="list-disc text-base mt-2 text-neutral-600">
                Sajha Yatayat provides priority seating for passengers with
                disabilities.
              </li>
              <li className="list-disc text-base mt-2 text-neutral-600">
                Passengers who use wheelchairs can easily board Sajha Yatayat
                buses, as they are equipped with ramps and securement systems.
              </li>
              <li className="list-disc text-base mt-2 text-neutral-600">
                These accessible buses offer affordable fares, making them an
                accessible and cost-effective mode of transportation for all
                passengers
              </li>
            </ul>
          </div>
          <div className="w-1/2  shrink-0  overflow-hidden">
            <img
              src="https://www.sajhayatayat.com.np/images/slideshow/4oH41-slider1.jpg
            "
              alt="sajha yatayat"
              className="w-full h-full  object-cover"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Transportation;
