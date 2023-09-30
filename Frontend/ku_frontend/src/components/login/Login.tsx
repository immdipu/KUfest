"use client";
import React, { useEffect, useState } from "react";
import Register from "@/components/login/Register/Register";
import { useMutation } from "@tanstack/react-query";
import userApis from "@/Apis";
import { useAppDispatch } from "@/redux/hooks";
import { LoggedIn } from "@/redux/slice/authSlice";
import toast from "react-hot-toast";
import SmallLoader from "../loader/SmallLoader";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const LogIn = useMutation((data: any) => userApis.Login(data), {
    onSuccess: (data) => {
      console.log(data);
      dispatch(LoggedIn(data));
      toast.success(" Logged in successfully");
      router.push("/");
    },
    onError: (data: any) => {
      if (data.response.data) {
        toast.error(data.response.data);
      } else {
        toast.error("Login failed  Try Again!");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    LogIn.mutate(data);
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  });

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mt-5 w-full">
          <label htmlFor="password">Password</label>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className=" max-w-xl w-full">
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              {LogIn.isLoading ? <SmallLoader size={25} /> : "Login"}
            </button>
          </div>
          <Register />
        </div>
      </form>
    </>
  );
};

export default Login;
