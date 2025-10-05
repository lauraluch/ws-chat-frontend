import type { Chat } from "../../../types/Chat";
import type { User } from "../../../types/User";

export interface ChatContextData {
  chat?: Chat;
  user?: User;
  chatOwnerSocketId?: string;
  setChat: (chatData: Partial<Chat>) => void;
  setUser: (userData: User) => void;

  resetChat: () => void;
}
