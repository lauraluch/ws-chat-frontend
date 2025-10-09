import { socket } from ".";
import type { Message } from "../../types/Message";
import type {
  ChatUpdater,
  CreateRoomResponse,
  JoinRoomResponse,
  RoomState,
} from "./types";

export function setupSocketListeners(setChat: ChatUpdater) {
  function handleRoomState(roomState: RoomState) {
    setChat((prev) => ({
      ...prev,
      code: roomState.code,
      ownerName: roomState.ownerName,
      ownerPresent: roomState.ownerPresent,
      users: roomState.users,
      messages: roomState.messages,
      createdAt: roomState.createdAt,
    }));
  }

  function handleNewMessage(message: Message) {
    setChat((prev) => ({
      ...prev,
      messages: [...(prev.messages || []), message],
    }));
  }

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
}

export function createRoomSocket(
  username: string,
  callback: (response: CreateRoomResponse) => void
) {
  socket.emit("create_room", { username }, callback);
}

export function joinRoomSocket(
  username: string,
  code: string,
  callback: (response: JoinRoomResponse) => void
) {
  socket.emit("join_room", { username, code }, callback);
}

export function leaveRoom(onLeft: (response: { ok: boolean }) => void) {
  socket.emit("leave_room", (response: { ok: boolean }) => {
    onLeft(response);
  });
}

export function sendMessage(text: string) {
  if (!text.trim()) return;
  socket.emit("send_message", { text });
}
