/* eslint-disable react-refresh/only-export-components */
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
import { ChatStorage } from "../../cache/chatStorage";

// Storage

const storage = new ChatStorage();

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // Inicializa os estados com o que estiver no localStorage
  const [user, setUserState] = useState<User | undefined>(() =>
    storage.getUser()
  );
  const [chat, setChatState] = useState<Chat>(
    () => storage.getChat() || { users: [], messages: [] }
  );

  // Funções para atualizar estado + localStorage
  const setUser = (userData: User) => {
    setUserState(userData);
    storage.save({ user: userData });
  };

  const setChat = (chatData: Partial<Chat>) => {
    setChatState((prev) => {
      const newChat = { ...prev, ...chatData };
      storage.save({ chat: newChat });
      return newChat;
    });
  };

  const resetChat = () => {
    setUserState(undefined);
    setChatState({ users: [], messages: [] });
    storage.clear();
  };

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        chat,
        setChat,
        resetChat,
      }}
    >
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

export { ChatContextProvider, useChatContext };
