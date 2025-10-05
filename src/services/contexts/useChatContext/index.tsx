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
  // States
  const [chat, setChat] = useState<Chat>();
  const [user, setUser] = useState<User>();

  // Functions
  function createChat(chat: Chat) {
    setChat(chat);
  }

  function createUser(user: User) {
    setUser(user);
  }

  return (
    <ChatContext.Provider value={{ chat, user, createChat, createUser }}>
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
