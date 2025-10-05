import type React from "react";
import { Sidebar } from "../../commons/structure/Sidebar";
import { getSidebarItems } from "../../commons/structure/Sidebar/constants";
import { ChatDetails } from "./sections/ChatDetails";
import { Participants } from "./sections/Participants";
import { Messages } from "./sections/Messages";
import { useChatPage } from "./hooks/useChatPage";

export const ChatPage: React.FC = () => {
  const { chat, sendMessage, handleSignout, clearMessages } = useChatPage();

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-row flex-1 h-full gap-4">
        <Sidebar items={getSidebarItems(handleSignout, clearMessages)} />

        <div className="flex flex-row flex-1 gap-4">
          <div className="flex flex-col gap-4 flex-2 max-w-[330px]">
            <ChatDetails />

            <Participants participants={chat?.users || []} />
          </div>

          <div className="flex flex-col flex-5">
            <Messages
              messages={chat?.messages || []}
              onSendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
