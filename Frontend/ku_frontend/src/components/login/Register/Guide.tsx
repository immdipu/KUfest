"use client";
import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useMutation } from "@tanstack/react-query";
import SmallLoader from "@/components/loader/SmallLoader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageList } from "@/lib/utils";
import clsx from "clsx";
import toast from "react-hot-toast";
import userApis from "@/Apis";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectInput from "react-select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GuideForm } from "@/types/UserForm";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { LoggedIn } from "@/redux/slice/authSlice";

interface Props {
  value: string;
  label: string;
}

const initialUserForm: GuideForm = {
  fullName: undefined,
  email: undefined,
  password: undefined,
  contactNumber: undefined,
  address: undefined,
  dateOfBirth: undefined,
  gender: undefined,
  language: undefined,
  tourType: undefined,
  termsAndConditions: undefined,
  profilePicture: undefined,
  about: undefined,
  experience: undefined,
  paymentType: undefined,
  rate: undefined,
};

const Guides = () => {
  const [date, setDate] = React.useState<Date | undefined>();
  const [languages, setLanguages] = useState<Props[]>([]);
  const [Guidesform, setGuidesform] = useState<GuideForm>(initialUserForm);
  const dispatch = useAppDispatch();

  const handleSelectChange = (e: any) => {
    setLanguages(e);
  };

  const Signup = useMutation((data: any) => userApis.signUp(data), {
    onSuccess: (data) => {
      console.log(data);
      toast.success("Account created successfully");
      dispatch(LoggedIn(data));
      localStorage.setItem("data", JSON.stringify(data));
    },
    onError: (data: any) => {
      toast.error("Sign up failed ");
    },
  });

  const handleGenderChange = (e: string) => {
    setGuidesform((prevState) => {
      return { ...prevState, gender: e };
    });
  };

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value.toString();
    setGuidesform((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGuidesform((prevState) => {
      return { ...prevState, about: e.target.value };
    });
  };

  const handleOnsubmit = (e: FormEvent) => {
    e.preventDefault();
    setGuidesform((prevState) => {
      if (!date) return { ...prevState };
      return { ...prevState, dateOfBirth: date.toString() };
    });
    Signup.mutate(Guidesform);
  };

  return (
    <div>
      <h3 className="text-center mt-16 text-xl font-semibold text-green-600">
        Join Our Inclusive Tourism Community as a Guide
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
                type="text"
                onChange={formHandler}
                name="fullName"
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
                onChange={formHandler}
                type="text"
                name="password"
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
                onChange={formHandler}
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
                type="number"
                onChange={formHandler}
                name="contactNumber"
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
                type="text"
                onChange={formHandler}
                name="address"
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
              <div className="mt-2 w-full">
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
                  value={Guidesform.language}
                  isMulti
                />
              </div>
            </div>
            <div className="w-full mt-8">
              <label htmlFor="address" className="px-1">
                How many years of experience do you have as a guide?
              </label>
              <Input
                id="experience"
                type="number"
                className="w-full my-2"
                placeholder="Enter your experience in years"
              />
            </div>
          </section>
          <br />
          <br />
          <Separator />
          <br />
          <section>
            <div className="w-full mt-2">
              <label htmlFor="address" className="px-1">
                How do you want to be paid?
              </label>
              <div className="mt-5 pl-1">
                <RadioGroup
                  defaultValue="perday"
                  className="flex flex-col gap-4"
                  onValueChange={(e) => {
                    setGuidesform((prevState) => {
                      return { ...prevState, paymentType: e };
                    });
                  }}
                >
                  <div className="flex flex-col  space-x-2">
                    <div className=" space-x-3 flex items-center">
                      <RadioGroupItem
                        value="perday"
                        id="option-one"
                        className="text-green-500 border-green-500"
                      />
                      <Label htmlFor="option-one" className="text-neutral-800">
                        Per day
                      </Label>
                    </div>
                    <p className="block mt-1 pl-5 text-neutral-500 font-light text-sm">
                      You&rsquo;ll receive payment for each day you work as a
                      tourist guide.
                    </p>
                  </div>
                  <div className="flex flex-col  space-x-2">
                    <div className=" space-x-3 flex items-center">
                      <RadioGroupItem
                        className="text-green-500 border-green-500"
                        value="pertour"
                        id="option-one"
                      />
                      <Label htmlFor="option-one" className="text-neutral-800">
                        Per tour
                      </Label>
                    </div>
                    <p className="block mt-1 pl-5 text-neutral-500 font-light text-sm">
                      You&rsquo;ll get paid at the end of each tour or project
                      you lead as a tourist guide
                    </p>
                  </div>
                  <div className="flex flex-col  space-x-2">
                    <div className=" space-x-3 flex items-center">
                      <RadioGroupItem
                        className="text-green-500 border-green-500"
                        value="weekly"
                        id="option-one"
                      />
                      <Label htmlFor="option-one" className="text-neutral-800">
                        Weekly
                      </Label>
                    </div>
                    <p className="block mt-1 pl-5 text-neutral-500 font-light text-sm">
                      You&rsquo;ll get paid at the end of each week you work as
                      a tourist guide.
                    </p>
                  </div>
                </RadioGroup>
                <div className="mt-10">
                  <h3>What is the amount you will like to be paid?</h3>
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
                        name="rate"
                        onChange={formHandler}
                        type="number"
                        className=" my-2 w-1/4"
                        placeholder="Rs. 0.00"
                        min={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
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
                  setGuidesform((prevState) => {
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
                !Guidesform.termsAndConditions
                  ? "pointer-events-auto opacity-50"
                  : "pointer-events-auto opacity-100"
              )}
            >
              {Signup.isLoading ? (
                <SmallLoader size={20} />
              ) : (
                <span>Sign Up</span>
              )}
            </Button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default Guides;
