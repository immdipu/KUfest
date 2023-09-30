"use client";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { DisableAisstanceHireProps } from "@/types/UserForm";
import Map from "./Map";
import toast from "react-hot-toast";
import clsx from "clsx";
import { Checkbox } from "@/components/ui/checkbox";

interface modalProps {
  rate: number;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const disabilities = [
  { id: "mobility", name: "Mobility impairment" },
  { id: "visual", name: "Visual impairment" },
  { id: "hearing", name: "Hearing impairment" },
  { id: "cognitive", name: "Cognitive impairment" },
  { id: "speech", name: "Speech impairment" },
  { id: "autism", name: "Autism spectrum disorder" },
  { id: "chronicpain", name: "Chronic pain" },
  { id: "other", name: "Other (please specify)" },
];

const Modal: React.FC<modalProps> = ({ rate, setShowModal }) => {
  const [Details, setDettails] = useState<DisableAisstanceHireProps>({
    hireRate: undefined,
    DisablePersonAbout: undefined,
    disabiliites: {
      autism: false,
      chronicpain: false,
      cognitive: false,
      hearing: false,
      mobility: false,
      speech: false,
      visual: false,
    },
  });
  const [outOfRangeRate, setOutOfRangeRate] = useState(false);

  const lowerLimit = rate - rate * 0.1;
  const upperLimit = rate + rate * 0.1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOutOfRangeRate(false);
    let name = e.target.name;
    let value = e.target.value.toString();
    if (name === "hireRate") {
      if (Number(value) < lowerLimit || Number(value) > upperLimit) {
        setOutOfRangeRate(true);
      }
      setDettails((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDettails((prev) => {
      return { ...prev, DisablePersonAbout: e.target.value };
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!Details.hireRate) {
      toast.error("Please fill all the fields");
      return;
    }

    if (Details.hireRate < lowerLimit || Details.hireRate > upperLimit) {
      toast.error("Please enter a valid amount");
      return;
    }
    console.log(Details);
    toast.success("succesfully submitted");
  };

  return (
    <>
      <section className="bg-black fixed    inset-0 z-10 bg-opacity-40">
        <section className="bg-neutral-100 flex flex-col mx-auto max-w-6xl w-full h-[90vh] mt-8 overflow-y-auto">
          <h1 className="font-semibold text-neutral-800 py-2 px-8 mt-7 text-2xl">
            Submit Your Details
          </h1>
          <div className="w-full mt-2  px-8 pt-8 h-full  ">{/* <Map /> */}</div>
          <form onSubmit={submitHandler}>
            <section className="w-full px-12">
              <div className="mt-10">
                <h3>What is the amount you will like to pay?</h3>
                <div>
                  <div className="flex  mt-3">
                    <div className="w-full">
                      <label htmlFor="address" className="px-1">
                        Amount
                      </label>
                      <p className="text-sm mt-px font-light text-neutral-500 pl-1">
                        Total amount the client will see on your profile
                      </p>
                    </div>

                    <Input
                      id="amount"
                      type="number"
                      name="hireRate"
                      defaultValue={rate}
                      className={clsx(
                        " my-2 w-1/4 text-neutral-500  tracking-wide",
                        outOfRangeRate && " ring-red-600 ring-2 outline-none"
                      )}
                      placeholder="Rs. 0.00"
                      min={0}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>
            <br />
            <br />
            <Separator />
            <section className="pb-9">
              <div className="pl-12  py-6">
                <label htmlFor="gender" className="px-1 ">
                  Select the type of disability:
                </label>
              </div>
              <div className="grid grid-cols-2 justify-between px-10 gap-3">
                {disabilities.map((item, index) => {
                  return (
                    <div key={index} className="flex  items-center gap-3  px-5">
                      <Checkbox
                        onCheckedChange={(e) =>
                          setDettails((prev) => {
                            return {
                              ...prev,
                              disabiliites: {
                                ...prev.disabiliites,
                                [item.id]: e,
                              },
                            };
                          })
                        }
                      />{" "}
                      <p className="text-neutral-700 text-sm">{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <Separator />
            <br />
            <section className="px-12">
              <label htmlFor="about">Describe your disability:</label>
              <textarea
                id="about"
                className="w-full my-2 p-5 rounded-md"
                placeholder="Explain any specific details "
                rows={5}
                onChange={handleTextareaChange}
                name="experience"
              />
            </section>
            <section className="py-10 flex justify-between px-12">
              <Button
                variant="default"
                type="button"
                onClick={() => setShowModal(false)}
                className={clsx(
                  " ml-5 w-fit px-5 bg-neutral-200 text-neutral-500 w-"
                )}
              >
                cancel
              </Button>
              <Button
                variant="default"
                className={clsx("bg-neutral-700 ml-5 w-[25%] px-5")}
              >
                Apply Now
              </Button>
            </section>
          </form>
        </section>
      </section>
    </>
  );
};

export default Modal;
