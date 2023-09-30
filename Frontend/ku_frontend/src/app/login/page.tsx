/* eslint-disable @next/next/no-img-element */
import React from "react";
import Login from "@/components/login/Login";

const page = () => {
  return (
    <div>
      <section className="h-screen flex flex-col md:flex-row justify-center  md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <section className="flex flex-col self-start pt-24 gap-7">
          <div className="">
            <h2 className="font-semibold text-3xl text-center py-2">
              Welcome to
              <span className="text-red-500 pl-2">Nepal</span>
              <span className="text-blue-600">Ease</span>
            </h2>
            <p className="text-sm text-neutral-500">
              we are on a mission to make the wonders of Nepal accessible to all
              travelers
            </p>
          </div>
          <div className="text-center mt-2  font-medium text-neutral-800">
            Please Enter your Email and Password to Continue
          </div>
          <Login />
        </section>
      </section>
    </div>
  );
};

export default page;
