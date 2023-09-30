/* eslint-disable @next/next/no-img-element */
import React from "react";
import Assistance from "@/components/assistance/Assistance";
import { LiaLaptopSolid } from "react-icons/lia";
import { BsCashCoin } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const page = () => {
  return (
    <div>
      <div className="h-72 relative">
        <img
          src="https://static.wixstatic.com/media/366bd9_0410af3138d24fd99bcb79e9a6adcd74~mv2.jpg/v1/fill/w_640,h_336,al_c,lg_1,q_80,enc_auto/366bd9_0410af3138d24fd99bcb79e9a6adcd74~mv2.jpg"
          alt="Assistance"
          className="w-full h-full object-cover"
        />
        <div className="inset-0 flex flex-col justify-center items-center  bg-black bg-opacity-60 absolute w-full h-full">
          <h3 className="text-neutral-100 font-semibold text-3xl  ">
            Hire Assistance in Nepal
          </h3>
        </div>
      </div>

      <div className="flex justify-center  flex-col items-center mt-8">
        <h4 className="text-green-400 font-medium text-2xl">
          Hire a Assistance in Nepal
        </h4>
        <h4 className="mt-1 font-medium text-neutral-500">
          without paying agency commission
        </h4>
      </div>

      <div className="flex justify-center items-center flex-col mt-10">
        <h2 className="text-3xl font-medium text-neutral-700">
          How does it work?
        </h2>
        <section className="mt-12 flex gap-16">
          <section className="flex flex-col border items-center px-5 py-3  w-64 rounded-md bg-neutral-50">
            <h3 className="text-lg font-semibold mt-3 text-neutral-800">
              Who?
            </h3>
            <LiaLaptopSolid className="text-green-500 my-3 text-5xl" />
            <h3 className="font-medium mt-2">We are not a Agency</h3>
            <p className="mt-4 text-sm text-center">
              We are Online protal. Hire help Assitance for disable people
            </p>
          </section>
          <section className="flex flex-col border px-5 py-3  w-64 rounded-md bg-neutral-50 items-center">
            <h3 className="text-lg font-semibold mt-3 text-neutral-800">
              Why?
            </h3>
            <BsCashCoin className="text-green-500 my-3 text-5xl" />
            <h3 className="font-medium mt-2">Pay as little and Hire</h3>
            <p className="mt-4 text-sm text-center">
              No futher commission to pay. Pay as little as you can. Cheaper
              than any other agency
            </p>
          </section>
          <section className="flex flex-col border px-5 py-3  w-64 rounded-md bg-neutral-50 items-center">
            <h3 className="text-lg font-semibold mt-3 text-neutral-800">
              How?
            </h3>
            <BsFillPersonFill className="text-green-500 my-3 text-5xl" />
            <h3 className="font-medium mt-2 text-center ">
              100+ Assistances. Security Guarantee.
            </h3>
            <p className="mt-4 text-sm text-center">
              Shortlist the one you like. We will help you to hire the best. If
              required a interivew will be arranged.
            </p>
          </section>
        </section>
      </div>

      <Assistance />
    </div>
  );
};

export default page;
