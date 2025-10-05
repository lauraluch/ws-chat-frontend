/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from "react";
import { useChatContext } from "../../../../services/contexts/useChatContext";
import { socket } from "../../../../services/socket";
import { useNavigate } from "react-router-dom";

export function useChatPage() {
  // Hooks
  const navigate = useNavigate();
  const { user, chat, setChat, resetChat, clearMessages } = useChatContext();

  const handleSignout = useCallback(() => {
    if (!chat?.code) {
      resetChat();
      navigate("/");
      return;
    }

    socket.emit("leave_room", (response: any) => {
      console.log("[leave_room]", response);
      resetChat();
      navigate("/");
    });
  }, [chat?.code, resetChat, navigate]);

  useEffect(() => {
    const handleRoomState = (roomState: any) => {
      console.log("[room state]:", roomState);
      setChat((prev) => ({
        ...prev,
        code: roomState.code,
        ownerName: roomState.ownerName,
        ownerPresent: roomState.ownerPresent,
        users: roomState.users,
        messages: roomState.messages,
      }));
    };

    const handleNewMessage = (message: any) => {
      console.log("[new message]", message);
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
  }, [setChat]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    socket.emit("send_message", { text });
  }, []);

  return {
    user,
    chat,
    clearMessages,
    sendMessage,
    handleSignout,
  };
}
