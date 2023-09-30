"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import { LoggedIn } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import SingleUserCard from "./SingleUserCard";
import clsx from "clsx";

const fakeData = [
  {
    _id: "1",
    chatName: "Family Chat",
    createdAt: "2023-10-01T10:00:00Z",
    isGroupChat: true,
    updatedAt: "2023-10-01T12:30:00Z",
    users: ["Alice", "Bob", "Charlie", "David"],
    latestMessage: "Hey, how's everyone doing?",
  },
  {
    _id: "2",
    chatName: "Work Chat",
    createdAt: "2023-09-30T15:20:00Z",
    isGroupChat: true,
    updatedAt: "2023-10-01T09:45:00Z",
    users: ["Alice", "Eve", "Frank", "Grace"],
    latestMessage: "We need to finalize the project report ASAP.",
  },
  {
    _id: "3",
    chatName: "Personal Chat",
    createdAt: "2023-09-29T18:10:00Z",
    isGroupChat: false,
    updatedAt: "2023-09-30T22:15:00Z",
    users: ["Alice", "Bob"],
    latestMessage: "Let's meet for coffee tomorrow!",
  },
];

const ChatSidebar = () => {
  const chatType = useSearchParams().get("type");
  const user = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div
      className={clsx(
        "fixed  left-0 bottom-0 z-[51] py-2 bg-neutral-900 transition-all ease-in-out duration-100  max-w-sm w-full max-md:w-3/4 max-md:shrink shrink-0 h-full max-md:left-0 "
      )}
    >
      <div className="flex items-center gap-1">
        <button className="px-1  ml-2 max-md:block hidden">
          <LuArrowLeft className="text-lg text-neutral-300" />
        </button>
        <div className="flex items-center h-10 bg-neutral-800 border border-neutral-600 border-opacity-30 px-2 rounded-full">
          <BiSearch className="text-neutral-400 text-xl" />
          <input
            type="search"
            placeholder="Search chat "
            className=" bg-transparent h-full px-3 text-neutral-300 placeholder:text-neutral-500 my-1 outline-none  border-none"
          />
        </div>
        <Link href={"/"}>
          <BiHomeAlt2 className="text-xl ml-2 text-neutral-400" />
        </Link>
      </div>
      {/* messages */}
      <section className=" mt-12 flex flex-col gap-2 chatlist-container overflow-hidden hover:overflow-y-auto  max-h-[82%]">
        <div>
          <div className="flex items-center justify-around gap-2 mb-5 border-b border-neutral-700 "></div>
        </div>

        <section>
          {fakeData.map((chat) => (
            <SingleUserCard
              key={chat._id}
              _id={chat._id}
              chatName={chat.chatName}
              createdAt={chat.createdAt}
              isGroupChat={false}
              updatedAt={chat.updatedAt}
              users={chat.users}
              isMember={false}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default ChatSidebar;
