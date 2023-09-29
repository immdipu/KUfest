"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import clsx from "clsx";

const Register = () => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  const handleNext = () => {
    if (yes) {
      window.location.href = "/login/guide";
    } else if (no) {
      window.location.href = "/login/user";
    }
  };

  return (
    <div>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Don&lsquo;t have an account?
        <Dialog>
          <DialogTrigger className="px-2 text-blue-500">Register</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <h2 className=" font-medium text-lg pt-5 text-neutral-800">
                  Are you Tourist guide?
                </h2>
                <div className="flex gap-10 mt-6">
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Yes
                    </label>{" "}
                    <Checkbox
                      checked={yes}
                      onCheckedChange={() => {
                        setYes(!yes);
                        setNo(false);
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      No
                    </label>{" "}
                    <Checkbox
                      checked={no}
                      onCheckedChange={() => {
                        setNo(!no);
                        setYes(false);
                      }}
                    />
                  </div>
                </div>
                <div className="mt-7  flex justify-end  ">
                  <button
                    className={clsx(
                      "bg-blue-600 text-base text-neutral-50 px-5 py-2 rounded-lg",
                      !yes && !no
                        ? "opacity-50 pointer-events-none"
                        : "pointer-events-auto"
                    )}
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Register;
