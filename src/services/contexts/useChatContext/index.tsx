// External Libraries
import React, {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

// Types
import type { ChatContextData } from "./types";
import type { Chat } from "../../../types/Chat";
import type { User } from "../../../types/User";

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [chat, setChat] = useState<Chat>({
    users: [],
    messages: [],
  });

  function resetChat() {
    setChat({ users: [], messages: [] });
  }

  return (
    <ChatContext.Provider value={{ user, setUser, chat, setChat, resetChat }}>
      {children}
    </ChatContext.Provider>
  );
};

function useChatContext(): ChatContextData {
  const context = useContext(ChatContext);

  if (!Object.keys(context)?.length) {
    throw new Error("useChatContext must be within a ContextProvider");
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ChatContextProvider, useChatContext };
