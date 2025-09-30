import type React from "react";
import { Sidebar } from "../../commons/structure/Sidebar";
import { getSidebarItems } from "../../commons/structure/Sidebar/constants";
import { Card } from "../../commons/structure/Card";
import { MESSAGES_MOCK } from "../../../mocks/messages";
import { MessageItem } from "../../commons/structure/MessageItem";
import { RoomCodeBadge } from "../../commons/structure/RoomCodeBadge";
import { Typography } from "../../commons/toolkit/Typography";
import { UserItem } from "../../commons/structure/UserItem";
import { USERS_MOCK } from "../../../mocks/users";
import { MessageInput } from "../../commons/inputs/MessageInput";

export const InitialPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      {/* <Typography variant="h2">ws-chat</Typography> */}

      <div className="flex flex-row flex-1 h-full gap-4">
        <Sidebar items={getSidebarItems()} />

        <div className="flex flex-row flex-1 gap-4">
          <div className="flex flex-col gap-4 flex-2 max-w-[330px]">
            <div>
              <Card title="Dados do chat">
                <div className="flex flex-row gap-2 items-center">
                  <Typography variant="p2" color="var(--color-text-secondary)">
                    Código da sala:{" "}
                  </Typography>
                  <RoomCodeBadge code={"e28bfd-3u5dz-i388dm"} />
                </div>

                <div className="flex flex-row gap-2 items-center mt-1">
                  <Typography
                    variant="p3"
                    color="var(--color-text-placeholder)"
                  >
                    Criada em 30/09/2025 às 07:34
                  </Typography>
                </div>
              </Card>
            </div>

            <Card
              title="Participantes"
              height="100%"
              endComponent={
                <Typography variant="p3" color="var(--color-text-secondary)">
                  ({USERS_MOCK.length})
                </Typography>
              }
            >
              {USERS_MOCK.map((user) => (
                <UserItem
                  key={`user-${user.userId}`}
                  user={user}
                  isSelf={user.userId === "user1"}
                  isCreator={user.userId === "user1"}
                />
              ))}
            </Card>
          </div>

          <div className="flex flex-col flex-5">
            <Card title="Mensagens" height="100%" gap="16px">
              <div className="flex flex-col h-full w-full p-3 overflow-auto custom-scrollbar gap-3 rounded-lg custom-messages-bg">
                {MESSAGES_MOCK.map((message) => (
                  <MessageItem
                    key={message.id}
                    message={message}
                    isSelf={message.userId === "user1"}
                  />
                ))}
              </div>

              <MessageInput
                onSendMessage={function (message: string): void {
                  console.log(message);
                }}
              />
              {/* <div className="flex w-full h-[45px] min-h-[45px] rounded-lg bg-general-background"></div> */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
