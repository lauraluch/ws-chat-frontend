import React, { useEffect, useRef, type JSX } from "react";
import { useChatContext } from "../../../../../services/contexts/useChatContext";
import type { Message } from "../../../../../types/Message";
import { MessageInput } from "../../../../commons/inputs/MessageInput";
import { MESSAGE_INPUT_HEIGHT_PX } from "../../../../commons/inputs/MessageInput/constant";
import { Card } from "../../../../commons/structure/Card";
import { MessageItem } from "../../../../commons/structure/MessageItem";

interface Props {
  messages: Message[];
  onSendMessage: (text: string) => void;
  rightComponent?: JSX.Element;
}

export const Messages: React.FC<Props> = ({
  messages,
  onSendMessage,
  rightComponent,
}) => {
  const { user } = useChatContext();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <Card
        title="Mensagens"
        subtitle="Visualize as mensagens enviadas pelos participantes da sala."
        height="100%"
        endComponent={rightComponent}
        gap="16px"
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex-1 overflow-auto p-3 gap-3 flex flex-col rounded-lg custom-inner-shadow custom-scrollbar custom-messages-bg"
          >
            {messages.map((message) => (
              <MessageItem
                key={message.id}
                message={message}
                isSelf={message.userSocketId === user?.socketId}
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
