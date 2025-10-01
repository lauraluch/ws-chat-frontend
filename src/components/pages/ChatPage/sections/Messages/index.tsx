import type { Message } from "../../../../../types/Message";
import { MessageInput } from "../../../../commons/inputs/MessageInput";
import { Card } from "../../../../commons/structure/Card";
import { MessageItem } from "../../../../commons/structure/MessageItem";

interface Props {
  messages: Message[];
}

export const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <div>
      <Card title="Mensagens" height="100%" gap="16px">
        <div className="flex flex-col h-full w-full p-3 overflow-auto custom-scrollbar gap-3 rounded-lg custom-messages-bg">
          {messages.map((message) => (
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
      </Card>
    </div>
  );
};
