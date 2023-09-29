"use client"
import React from "react";
import GuideCard from "./GuideCard"; // Adjust the import path as per your project structure

const Assistance = () => {
  const handleHireClick = () => {
    // Add logic to handle hiring the guide
    console.log('Hiring guide...');
  };

  return (
    <div>
      <section className="max-w-5xl bg-neutral-200 mx-auto w-full">
      <GuideCard
        name="John Doe"
        experience={5}
        contact="john.doe@example.com"
        onHireClick={handleHireClick}
      />

      </section>
     
    </div>
  );
};

export default Assistance;
