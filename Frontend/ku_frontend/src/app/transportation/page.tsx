/* eslint-disable @next/next/no-img-element */
import React from "react";
import Transportation from "@/components/transportation/Transportation";

const page = () => {
  return (
    <div>
      <div className="h-96">
        <img
          src="https://media.iamsterdam.com/w_1800,h_1020/2h432io50hkq-sloterpark.jpg"
          alt="image with text"
          className="object-cover w-full h-full"
        />
      </div>
      <section>
        <Transportation />
      </section>
    </div>
  );
};

export default page;
