import type { Message } from "./Message";
import type { User } from "./User";

export interface Chat {
  code?: string;
  ownerSocketId?: string;
  ownerName?: string;
  ownerPresent?: boolean;
  users?: User[];
  messages?: Message[];
  createdAt?: string;
}
