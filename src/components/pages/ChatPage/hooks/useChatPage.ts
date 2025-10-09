/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
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

  function handleSignout() {
    if (!chat?.code) {
      resetChat();
      navigate("/");
      return;
    }

    leaveRoom(() => {
      resetChat();
      navigate("/");
    });
  }

  function handleEmitMessage(text: string) {
    sendMessage(text);
  }

  // Effects
  useEffect(() => {
    if (!chat?.code) {
      resetChat();
      navigate("/");
    }
  }, [chat?.code]);

  useEffect(() => {
    const cleanup = setupSocketListeners(setChat);
    return cleanup;
  }, [setChat]);

  return {
    user,
    chat,
    clearMessages,
    handleEmitMessage,
    handleSignout,
  };
}
