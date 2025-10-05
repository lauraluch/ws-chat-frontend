import type { Chat } from "../../../types/Chat";
import type { User } from "../../../types/User";

export interface ChatContextData {
  chat?: Chat;
  user?: User;
  setChat: React.Dispatch<React.SetStateAction<Chat>>;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  resetChat: () => void;
}
