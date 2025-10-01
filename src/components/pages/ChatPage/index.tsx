import type React from "react";
import { Sidebar } from "../../commons/structure/Sidebar";
import { getSidebarItems } from "../../commons/structure/Sidebar/constants";
import { MESSAGES_MOCK } from "../../../mocks/messages";
import { USERS_MOCK } from "../../../mocks/users";
import { ChatDetails } from "./sections/ChatDetails";
import { Participants } from "./sections/Participants";
import { Messages } from "./sections/Messages";

export const InitialPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-row flex-1 h-full gap-4">
        <Sidebar items={getSidebarItems()} />

        <div className="flex flex-row flex-1 gap-4">
          <div className="flex flex-col gap-4 flex-2 max-w-[330px]">
            <ChatDetails />

            <Participants participants={USERS_MOCK} />
          </div>

          <div className="flex flex-col flex-5">
            <Messages messages={MESSAGES_MOCK} />
          </div>
        </div>
      </div>
    </div>
  );
};
