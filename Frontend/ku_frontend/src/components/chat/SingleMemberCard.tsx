import React, { useState, useEffect } from "react";
import { User } from "@/types/chatTypes";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAppSelector } from "@/redux/hooks";
import clsx from "clsx";

interface UserExtended extends User {
  owner: string;
}

const SingleMemberCard: React.FC<UserExtended> = ({
  _id,
  fullName,
  profilePic,
  username,
  owner,
}) => {
  const user = useAppSelector((state) => state.auth);

  return (
    <div className=" flex gap-3 py-2 px-7 hover:bg-neutral-800 duration-200 ease-linear">
      <div className="w-12 h-12 relative ">
        <Image
          alt={fullName}
          src={profilePic}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div
          className={clsx(
            " w-3 h-3 rounded-full absolute top-1 -right-0 border border-neutral-300",
            user.id === _id ? "bg-green-500" : "bg-neutral-400"
          )}
        />
      </div>
      <div className="flex-1 ">
        <h1 className="font-Helvetica  items-center capitalize text-neutral-200 font-normal text-base">
          {fullName}{" "}
          {_id === owner && (
            <span className="border inline-block ml-2 border-_light_white rounded-full text-xs border-opacity-40 text-neutral-100 bg-blue-500 px-2 py-[1px]">
              Owner
            </span>
          )}
        </h1>
        <h4 className="text-neutral-400 text-xs font-normal tracking-wide">
          @{username}
        </h4>
      </div>
    </div>
  );
};

export default SingleMemberCard;
