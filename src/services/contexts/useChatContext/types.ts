import type { Chat } from "../../../types/Chat";
import type { User } from "../../../types/User";

export interface ChatContextData {
  chat?: Chat;
  user?: User;
  createChat: (chat: Chat) => void;
  createUser: (user: User) => void;
}
