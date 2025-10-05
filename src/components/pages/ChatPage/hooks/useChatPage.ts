import { useCallback, useEffect } from "react";
import { useChatContext } from "../../../../services/contexts/useChatContext";
import { socket } from "../../../../services/socket";
import { useNavigate } from "react-router-dom";

export function useChatPage() {
  // Hooks
  const navigate = useNavigate();
  const { user, chat, setChat, resetChat } = useChatContext();

  // Functions
  function handleSignout() {
    resetChat();
    navigate("/");
  }

  useEffect(() => {
    socket.on("room_state", (roomState) => {
      setChat({
        ...chat,
        code: roomState.code,
        ownerName: roomState.ownerName,
        ownerPresent: roomState.ownerPresent,
        users: roomState.users,
        messages: roomState.messages,
      });
    });

    socket.on("new_message", (message) => {
      console.log("[new message]", message);

      setChat({
        ...chat,
        messages: [...(chat?.messages || []), message],
      });
    });

    socket.emit("request_room_state");

    return () => {
      socket.off("room_state");
      socket.off("new_message");
    };
  }, [setChat, chat]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    socket.emit("send_message", { text });
  }, []);

  return {
    user,
    chat,
    sendMessage,
    handleSignout,
  };
}
