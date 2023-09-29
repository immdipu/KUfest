"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageList } from "@/lib/utils";
import { language } from "@/types/UserForm";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectInput from "react-select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserForm } from "@/types/UserForm";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  value: string;
  label: string;
}

const initialUserForm: UserForm = {
  fullName: undefined,
  email: undefined,
  password: undefined,
  contactNumber: undefined,
  address: undefined,
  dateOfBirth: undefined,
  gender: undefined,
  language: undefined,
  country: undefined,
  numberOfvisitors: undefined,
  termsAndConditions: undefined,
  profilePicture: undefined,
  about: undefined,
  // experience: undefined,
  // paymentMode: {
  //   method: undefined,
  // },
};

const User = () => {
  const [date, setDate] = React.useState<Date | undefined>();

  const [usersform, setUsersform] = useState<UserForm | undefined>(
    initialUserForm
  );

  const handleSelectChange = (e: any) => {
    setUsersform((prevState) => {
      return { ...prevState, language: e };
    });
  };

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value.toString();
    setUsersform((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleOnsubmit = (e: FormEvent) => {
    e.preventDefault();
    setUsersform((prevState) => {
      if (!date) return { ...prevState };
      return { ...prevState, dateOfBirth: date.toString() };
    });
  };

  const handleGenderChange = (e: string) => {
    setUsersform((prevState) => {
      return { ...prevState, gender: e };
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUsersform((prevState) => {
      return { ...prevState, about: e.target.value };
    });
  };

  return (
    <div>
      <h3 className="text-center mt-16 text-xl font-semibold text-green-600">
        Join Our Inclusive Tourism Community as a Tourist
      </h3>
      <section className="max-w-4xl mb-10 bg-neutral-100 w-full mx-auto px-10 py-16 rounded-3xl mt-8">
        <form onSubmit={handleOnsubmit}>
          <section className="flex space-x-12">
            <div className="w-full">
              <label htmlFor="name" className="px-1">
                Full Name
              </label>
              <Input
                id="name"
                name="fullName"
                onChange={formHandler}
                className="w-full my-1"
                placeholder="Enter your full Name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="px-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                onChange={formHandler}
                type="text"
                className="w-full my-1"
                placeholder="Enter your password"
              />
            </div>
          </section>
          <section className="flex mt-8 space-x-12">
            <div className="w-full">
              <label htmlFor="email" className="px-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                className="w-full my-1"
                placeholder="Enter your email (optional)"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="px-1">
                Contact Number
              </label>
              <Input
                id="phone"
                name="contactNumber"
                onChange={formHandler}
                className="w-full my-1"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="w-full">
              <label htmlFor="address" className="px-1">
                Address
              </label>
              <Input
                id="address"
                name="address"
                onChange={formHandler}
                type="email"
                className="w-full my-1"
                placeholder="Enter your address"
              />
            </div>
          </section>
          <br />
          <Separator />
          <br />
          <section className="flex mt-2 space-x-12">
            <div className="flex flex-col w-full ">
              <label htmlFor="gender" className="px-1">
                Choose your Gender :
              </label>
              <div className="mt-2 w-full ">
                <Select onValueChange={handleGenderChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="address" className="px-1">
                Date of Birth
              </label>
              <div className="mt-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Date of Birth</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </section>
          <br />
          <br />
          <Separator />
          <br />
          <section>
            <div>
              <label htmlFor="gender" className="px-1">
                Add languages you can speak :
              </label>
              <div className="mt-2">
                <SelectInput
                  name="Language"
                  options={LanguageList}
                  onChange={handleSelectChange}
                  value={usersform?.language}
                  isMulti
                />
              </div>
            </div>
          </section>
          <br />
          <br />
          <Separator />
          <br />
          <section>
            <div className="w-full mt-2">
              <label htmlFor="address" className="px-1">
                How do you prefer to travel?
              </label>
              <div className="mt-5 pl-1">
                <RadioGroup
                  defaultValue="solo"
                  className="flex flex-col gap-4"
                  onValueChange={(e) => {
                    setUsersform((prevState) => {
                      return { ...prevState, tourType: e };
                    });
                  }}
                >
                  <div className="flex flex-col  space-x-2">
                    <div className=" space-x-3 flex items-center">
                      <RadioGroupItem
                        value="soloTravel"
                        id="option-one"
                        className="text-green-500 border-green-500"
                      />
                      <Label htmlFor="option-one" className="text-neutral-800">
                        Solo Travel
                      </Label>
                    </div>
                  </div>
                  <div className="flex flex-col  space-x-2">
                    <div className=" space-x-3 flex items-center">
                      <RadioGroupItem
                        className="text-green-500 border-green-500"
                        value="group"
                        id="option-one"
                      />
                      <Label htmlFor="option-one" className="text-neutral-800">
                        Group Visit
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {usersform?.tourType === "group" && (
              <div className="mt-10">
                <div>
                  <div className="flex  mt-3">
                    <div className="w-full">
                      <label htmlFor="address" className="px-1">
                        Total no of visitor
                      </label>
                      <Input
                        id="member"
                        type="number"
                        name="numberOfvisitors"
                        className=" my-2 w-1/2"
                        placeholder="0"
                        onChange={formHandler}
                        min={2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
          <br />

          <Separator />
          <br />

          <section>
            <label htmlFor="about">Write about yourself</label>
            <textarea
              id="about"
              className="w-full my-2 p-5 rounded-md"
              placeholder="Write about yourself"
              rows={5}
              onChange={handleTextareaChange}
              name="experience"
            />
          </section>
          <br />
          <br />
          <Separator />
          <br />
          <section>
            <div className="flex  items-center gap-3  px-5">
              <Checkbox
                onCheckedChange={(e) => {
                  setUsersform((prevState) => {
                    return { ...prevState, termsAndConditions: e as boolean };
                  });
                }}
              />{" "}
              <p className="text-neutral-700 text-sm">
                I certify that i am atleast 18 years old and i agree to the{" "}
                <Link
                  href={"/termscondition"}
                  className="text-blue-600 hover:underline"
                >
                  Terms and Policies
                </Link>{" "}
                and the{" "}
                <Link
                  className="text-blue-600 hover:underline"
                  href={"/privacypolicy"}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </section>
          <section className="mt-10  flex  ">
            <Button
              variant="default"
              className={clsx(
                "bg-neutral-700 ml-5 w-[25%] px-5",
                !usersform?.termsAndConditions
                  ? "pointer-events-auto opacity-50"
                  : "pointer-events-auto opacity-100"
              )}
            >
              submit
            </Button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default User;
