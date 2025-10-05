import { useCallback, useEffect } from "react";
import { useChatContext } from "../../../../services/contexts/useChatContext";
import { socket } from "../../../../services/socket";

export function useChatPage() {
  // Hooks
  const { user, chat, setChat } = useChatContext();

  useEffect(() => {
    socket.on("room_state", (roomState) => {
      setChat((prev) => ({
        ...prev,
        code: roomState.code,
        ownerName: roomState.ownerName,
        ownerPresent: roomState.ownerPresent,
        users: roomState.users,
        messages: roomState.messages,
      }));
    });

    socket.on("new_message", (message) => {
      console.log("[new message]", message);

      setChat((prev) => ({
        ...prev,
        messages: [...(prev?.messages || []), message],
      }));
    });

    socket.emit("request_room_state");

    return () => {
      socket.off("room_state");
      socket.off("new_message");
    };
  }, [setChat]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    socket.emit("send_message", { text });
  }, []);

  return {
    user,
    chat,
    sendMessage,
  };
}
