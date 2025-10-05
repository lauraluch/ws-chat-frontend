import { useCallback, useEffect } from "react";
import { useChatContext } from "../../../../services/contexts/useChatContext";
import { useNavigate } from "react-router-dom";
import {
  leaveRoom,
  sendMessage,
  setupSocketListeners,
} from "../../../../services/socket/handlers";

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

    leaveRoom(() => {
      resetChat();
      navigate("/");
    });
  }, [chat?.code, resetChat, navigate]);

  // Effects
  useEffect(() => {
    if (!chat?.code) {
      resetChat();
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat?.code]);

  useEffect(() => {
    const cleanup = setupSocketListeners(setChat);
    return cleanup;
  }, [setChat]);

  const emitMessage = useCallback((text: string) => {
    sendMessage(text);
  }, []);

  return {
    user,
    chat,
    clearMessages,
    sendMessage: emitMessage,
    handleSignout,
  };
}
