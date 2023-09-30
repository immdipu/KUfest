/* eslint-disable @next/next/no-img-element */
import React from "react";

const SingleAssistanceCard = () => {
  return (
    <div className="bg-neutral-200 bg-opacity-40 rounded-md w-10/12 min-h-96 mx-auto px-7 py-8">
      <section className="flex gap-4 ">
        <div>
          <img
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-1/311499637_2277474755755372_7003523239515569919_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=fe8171&_nc_ohc=kEFB1D0rjxoAX-toY1_&_nc_ht=scontent.fktm3-1.fna&oh=00_AfBV_ayq0-y_69lMzna8v0NnViB3TpS_VzlK5yfM0CC7bQ&oe=651BD204"
            alt="singleProfile"
            className="w-56 h-60 object-cover rounded-md"
          />
        </div>
        <section className="flex flex-col mt-3 w-full">
          <div className="font-medium flex justify-between w-full text-xl text-neutral-950">
            <div>
              <span className="text-lg text-neutral-900">Name : </span>

              <span className="text-neutral-900 text-base font-normal">
                Ramesh Karki
              </span>
            </div>
            <div className="mr-10">
              <button className="bg-green-500  text-white font-normal text-lg tracking-wide rounded-xl px-3 py-2">
                Hire Me
              </button>
            </div>
          </div>
          <div className="font-medium flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Contact : </span>
            <span className="text-neutral-700 text-base font-normal px-2">
              +9779807202691{" "}
            </span>
          </div>

          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Address : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              Kathmandu, New Banweshwor{" "}
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Gender : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              Male
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Languages : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              English, Nepali, Hindi, Newari,
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Experiences : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              2 years
            </span>
          </div>
          <div className="font-medium mt-2 flex justify-between w-fit items-center">
            <span className=" text-base text-neutral-900">Rate : </span>
            <span className="text-neutral-700 font-normal text-base font-norma px-2">
              Rs. 5000/month
            </span>
          </div>
        </section>
      </section>
      <section className="mt-10 px-3">
        <h3 className="text-neutral-900 font-semibold text-xl ">Biography</h3>
        <section className="mt-3">
          <p className="text-neutral-700">
            Hello! I am Ramesh Karki, and I am incredibly passionate about
            making a positive impact in the lives of people with disabilities
          </p>
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
    </div>
  );
};

export default SingleAssistanceCard;
