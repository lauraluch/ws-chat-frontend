import type { Chat } from "../../types/Chat";
import type { Message } from "../../types/Message";
import type { User } from "../../types/User";

export type CreateRoomResponse = {
  ok: boolean;
  code?: string;
  user: {
    userId: string;
    socketId: string;
    username: string;
  };
  error?: string;
};

export type JoinRoomResponse = {
  ok: boolean;
  ownerSocketId?: string;
  user: {
    userId: string;
    socketId: string;
    username: string;
  };
  error?: string;
};

export type RoomState = {
  code: string;
  ownerName: string;
  ownerPresent: boolean;
  users: User[];
  messages: Message[];
  createdAt: string;
};

export type ChatUpdater = (updater: (prev: Partial<Chat>) => void) => void;
