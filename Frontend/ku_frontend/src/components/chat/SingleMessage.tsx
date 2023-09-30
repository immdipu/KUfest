"use client";
import React from "react";
import MessageHeader from "./MessageHeader";
import { TbSend } from "react-icons/tb";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import AllMessages from "./AllMessages";
import { MessageTypes } from "@/types/chatTypes";
import { useAppSelector } from "@/redux/hooks";

interface sendMessageTypes {
  content: string;
  chatId: string;
}

const SingleMessage = () => {
  const ChatId = "123456789";
  const user = useAppSelector((state) => state.auth);
  const [message, setMessage] = React.useState("");
  const [Messages, setMessages] = React.useState<MessageTypes[]>([]);

  if (!user.isUserAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        {" "}
        <h1 className="text-2xl text-neutral-400">Please login to continue</h1>
      </div>
    );
  }

  const handleMsgSend = () => {
    if (!message || message.trim() === "") {
      return toast.error("Message can't be empty");
    }
    let data = {
      content: message,
      chatId: ChatId,
    };

    let newMsg = {
      content: message,
      sender: {
        _id: user.id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
      },
      createdAt: new Date().toISOString(),
      _id: "",
    } as MessageTypes;

    setMessages((prev) => [...prev, newMsg]);
    const contentEditable = document.querySelector(".MessageForm");
    setMessage("");
    if (contentEditable) {
      contentEditable.innerHTML = "";
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMsgSend();
    }
  };

  const handleInput = (e: any) => {
    const content = e.target as HTMLDivElement;
    setMessage(content.textContent || "");
  };

  return (
    <>
      <section className=" absolute bottom-0 flex   top-0  max-md:w-full  w-full pl-80">
        <section className="flex-col w-full">
          <MessageHeader
            fullName={"Hari prasad"}
            profilePic={`https://avatars.dicebear.com/api/bottts/hari.svg`}
            id={"123456789"}
            isGroupChat={false}
          />

          <section className=" mx-auto w-full  flex flex-col  h-[calc(100%-64px)]">
            <AllMessages
              setMessage={setMessages}
              ChatId={ChatId}
              Messages={Messages}
            />

            {/* SEND BUTTON */}
            <section className="py-1 px-36 max-xl:px-28  mt-3 justify-self-end  flex items-center  pb-7 gap-3 max-lg:px-8  max-md:px-2  w-full">
              <div className="w-full rounded-md min-h-[48px] flex items-center bg-neutral-800 py-1 px-3">
                <div
                  contentEditable
                  placeholder="Message"
                  className="text-neutral-100 bg-transparent   placeholder:text-xs  MessageForm w-full outline-none"
                  onKeyDown={handleKeyDown}
                  onInput={handleInput}
                ></div>
              </div>

              <button
                onClick={handleMsgSend}
                className=" bg-blue-500 rounded-full w-12  grid place-content-center h-12 shrink-0"
              >
                <TbSend className="text-3xl text-neutral-200" />
              </button>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SingleMessage;
