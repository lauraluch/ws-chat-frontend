import { useState } from "react";
import type { ChatForm } from "../types";
import { useChatContext } from "../../../../services/contexts/useChatContext";
import { useNavigate } from "react-router-dom";
import { generateRoomCode } from "../../../../services/functions/generateRoomCode";

export function useInitialPage() {
  // Hooks
  const navigate = useNavigate();
  const { createUser, createChat } = useChatContext();

  // States
  const [isCreating, setIsCreating] = useState();
  const [form, setForm] = useState<ChatForm>({
    username: "",
    roomCode: "",
  });

  function handleFormChange(key: keyof ChatForm, value: string) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleCreateChat() {
    createUser({
      userId: "1",
      username: form.username,
    });

    const roomCode = generateRoomCode();

    createChat({
      code: roomCode,
    });

    navigate("/chat");
  }

  function handleEnterChat() {
    createUser({
      userId: "1",
      username: form.username,
    });

    createChat({
      code: form.roomCode,
    });

    navigate("/chat");
  }

  return {
    form,
    isCreating,
    setIsCreating,
    handleCreateChat,
    handleFormChange,
    handleEnterChat,
  };
}
