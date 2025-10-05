/* eslint-disable @typescript-eslint/no-explicit-any */
import { socket } from ".";
import type { Message } from "../../types/Message";
import type { User } from "../../types/User";

type RoomState = {
  code: string;
  ownerName: string;
  ownerPresent: boolean;
  users: User[];
  messages: Message[];
};

type ChatUpdater = (updater: (prev: any) => any) => void;

export const setupSocketListeners = (setChat: ChatUpdater) => {
  const handleRoomState = (roomState: RoomState) => {
    setChat((prev) => ({
      ...prev,
      code: roomState.code,
      ownerName: roomState.ownerName,
      ownerPresent: roomState.ownerPresent,
      users: roomState.users,
      messages: roomState.messages,
    }));
  };

  const handleNewMessage = (message: Message) => {
    setChat((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  };

  if (!socket.hasListeners("room_state")) {
    socket.on("room_state", handleRoomState);
  }

  if (!socket.hasListeners("new_message")) {
    socket.on("new_message", handleNewMessage);
  }

  socket.emit("request_room_state");

  return () => {
    socket.off("room_state", handleRoomState);
    socket.off("new_message", handleNewMessage);
  };
};

export const leaveRoom = (onLeft: (response: { ok: boolean }) => void) => {
  socket.emit("leave_room", (response: { ok: boolean }) => {
    onLeft(response);
  });
};

export const sendMessage = (text: string) => {
  if (!text.trim()) return;
  socket.emit("send_message", { text });
};
