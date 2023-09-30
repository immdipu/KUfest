"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Map from "./modal/Map";
import SelectInput from "react-select";
import Modal from "./modal/Modal";

interface assistanceCardTypes {
  id: number;
  image: string;
  name: string;
  contact: string;
  address: string;
  gender: string;
  language: string;
  experience: string;
  rate: number;
  biography: string;
}

const SingleAssistanceCard: React.FC<assistanceCardTypes> = ({
  address,
  biography,
  contact,
  experience,
  gender,
  image,
  language,
  name,
  rate,
  id,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscrolll");
    }
  }, [showModal]);

  return (
    <div className="bg-neutral-200 hover:bg-opacity-80 duration-200 ease-linear transition-colors bg-opacity-40 rounded-md w-10/12 min-h-96 mx-auto px-7 py-8">
      <section className="flex gap-4 ">
        <div>
          <img
            src={image}
            alt="singleProfile"
            className="w-56 h-60 object-cover rounded-md"
          />
        </div>
        <section className="flex flex-col mt-3 w-full">
          <div className="font-medium flex justify-between w-full text-xl text-neutral-950">
            <div>
              <span className="text-lg text-neutral-900">Name : </span>

              <span className="text-neutral-900 text-base font-normal">
                {name}
              </span>
            </div>
            <div className="mr-10">
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="bg-green-500  text-white font-normal text-lg tracking-wide rounded-xl px-3 py-2"
              >
                Hire Me
              </button>
            </div>
          </div>
          <div className="font-medium flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Contact : </span>
            <span className="text-neutral-700 text-base font-normal px-2">
              {contact}
            </span>
          </div>

          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Address : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              {address}
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Gender : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              {gender}
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Languages : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              {language}
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Experiences : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              {experience}
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Rate : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              Rs. {rate}
            </span>
          </div>
        </section>
      </section>
      <section className="mt-10 px-3">
        <h3 className="text-neutral-900 font-semibold text-xl ">Biography</h3>
        <section className="mt-3">
          <p className="text-neutral-700">{biography}</p>
          <h4 className="py-3 font-semibold text-neutral-900">
            Why I Do What I Do ?
          </h4>
          <p className="text-neutral-700">
            Ever since I can remember, I have had a deep empathy for others and
            a strong desire to lend a helping hand. My journey into assisting
            individuals with disabilities began when I had the privilege of
            working with a close friends sibling who had unique needs.
            Witnessing the joy and progress that can be achieved with the right
            support fueled my commitment to this field.
          </p>
        </section>
      </section>
      {showModal && <Modal rate={rate} key={id} setShowModal={setShowModal} />}
    </div>
  );
};

export default SingleAssistanceCard;
