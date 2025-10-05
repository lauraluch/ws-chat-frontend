import type { Message } from "../../../../../types/Message";
import { MessageInput } from "../../../../commons/inputs/MessageInput";
import { MESSAGE_INPUT_HEIGHT_PX } from "../../../../commons/inputs/MessageInput/constant";
import { Card } from "../../../../commons/structure/Card";
import { MessageItem } from "../../../../commons/structure/MessageItem";

interface Props {
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export const Messages: React.FC<Props> = ({ messages, onSendMessage }) => {
  return (
    <div className="flex flex-col h-full">
      <Card title="Mensagens" height="100%" gap="16px">
        {/* Container geral do card */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Lista de mensagens rolável */}
          <div className="flex-1 overflow-auto p-3 gap-3 flex flex-col rounded-lg custom-scrollbar custom-messages-bg">
            {messages.map((message) => (
              <MessageItem
                key={message.id}
                message={message}
                isSelf={message.userId === "user1"}
              />
            ))}
          </div>

          <div
            className="flex-shrink-0 mt-3"
            style={{ height: `${MESSAGE_INPUT_HEIGHT_PX}px` }}
          >
            <MessageInput onSendMessage={onSendMessage} />
          </div>
        </div>
      </Card>
    </div>
  );
};
