import React from "react";
import ChatSidebar from "../../components/chat/sidebar/ChatSidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ChatSidebar />
      {children}
    </section>
  );
}
