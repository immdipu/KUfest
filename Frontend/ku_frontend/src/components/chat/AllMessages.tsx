"use client";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import SenderText from "./SenderText";
import ReceiverText from "./ReceiverText";
import { MessageTypes } from "@/types/chatTypes";
import { useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";

interface AllMessagesProps {
  ChatId: string;
  setMessage: React.Dispatch<React.SetStateAction<MessageTypes[]>>;
  Messages: MessageTypes[];
}

// eslint-disable-next-line react/display-name
const AllMessages: React.FC<AllMessagesProps> = React.memo(
  ({ ChatId, Messages, setMessage }) => {
    const user = useAppSelector((state) => state.auth);

    useEffect(() => {
      const messageContainer = document.querySelector(".message-container");
      if (messageContainer) {
        messageContainer.scrollTo(0, messageContainer.scrollHeight);
      }
    }, [Messages]);

    return (
      <>
        <section className="flex-grow px-36  pr-52  w-full message-container overflow-y-scroll pt-3 max-xl:px-28 max-lg:px-8  max-md:px-3 max-md:pl-8  ">
          {Messages.length > 0 &&
            Messages.map((msg, index) => {
              if (msg.sender._id === user.id) {
                return (
                  <SenderText
                    key={index}
                    lastMessageFromSameSender={
                      index > 0 &&
                      Messages[index - 1].sender._id === msg.sender._id
                    }
                    message={msg.content}
                    date={msg.createdAt}
                  />
                );
              } else {
                return (
                  <ReceiverText
                    senderPicture={msg.sender.profilePic}
                    key={index}
                    senderId={msg.sender._id}
                    lastMessageFromSameSender={
                      index > 0 &&
                      Messages[index - 1].sender._id === msg.sender._id
                    }
                    message={msg.content}
                    date={msg.createdAt}
                  />
                );
              }
            })}
          <></>
        </section>
      </>
    );
  }
);

export default AllMessages;
