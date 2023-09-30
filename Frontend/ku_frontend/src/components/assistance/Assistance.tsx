import React from "react";
import SingleAssistanceCard from "./SingleAssistanceCard";

const Assistance = () => {
  return (
    <div className="mt-32">
      <h3 className="mx-32 px-3 border-l-8 border-green-400 text-2xl font-semibold text-neutral-700 ">
        Assistances
      </h3>
      <section className="mt-1 py-8">
        <SingleAssistanceCard />
      </section>
    </div>
  );
};

export default Assistance;
