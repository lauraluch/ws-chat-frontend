/* eslint-disable @typescript-eslint/no-explicit-any */
import { socket } from "./index";

type CreateRoomResponse = {
  ok: boolean;
  code?: string;
  user: {
    userId: string;
    socketId: string;
    username: string;
  };
  error?: string;
};

type JoinRoomResponse = {
  ok: boolean;
  ownerSocketId?: string;
  user: {
    userId: string;
    socketId: string;
    username: string;
  };
  error?: string;
};

export const createRoomSocket = (
  username: string,
  callback: (response: CreateRoomResponse) => void
) => {
  socket.emit("create_room", { username }, callback);
};

export const joinRoomSocket = (
  username: string,
  code: string,
  callback: (response: JoinRoomResponse) => void
) => {
  socket.emit("join_room", { username, code }, callback);
};
