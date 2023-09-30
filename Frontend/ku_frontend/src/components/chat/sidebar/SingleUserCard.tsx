import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChatsTypes, MessageTypes } from "@/types/chatTypes";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import clsx from "clsx";

const SingleUserCard: React.FC<ChatsTypes> = ({
  _id,
  chatName,
  createdAt,
  isGroupChat,
  updatedAt,
  users,
}) => {
  const user = useAppSelector((state) => state.auth);
  const router = useRouter();
  const chatId = useSearchParams().get("id");
  const chatType = useSearchParams().get("type");
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        onClick={() => {
          router.push(`/chat?id=${_id}&type=${chatType}`);
        }}
        className={clsx(
          "flex  py-2 hover:bg-neutral-800 px-4 transition-colors duration-300 ease-linear gap-2 items-center",
          chatId === _id && "bg-neutral-800"
        )}
      >
        <div className="shrink-0 grid place-content-center h-12 w-12 rounded-full overflow-auto ">
          <Image
            // src={`https://avatars.dicebear.com/api/avataaars/dipu.svg`}
            src={"https://avatars.dicebear.com/api/avataaars/dipu.svg"}
            alt="profile"
            width={50}
            height={50}
          />
        </div>

        <div className="overflow-hidden w-full">
          <div className="flex w-full items-center  justify-between">
            <h3 className="text-neutral-200 flex-grow capitalize font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              {"Ram"}
            </h3>
          </div>

          <div className="flex"></div>
        </div>
      </div>
    </>
  );
};

export default SingleUserCard;
