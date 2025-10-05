import { useState } from "react";
import type { ChatForm } from "../types";
import { useChatContext } from "../../../../services/contexts/useChatContext";
import { useNavigate } from "react-router-dom";
import {
  createRoomSocket,
  joinRoomSocket,
} from "../../../../services/socket/initialHandlers";

export function useInitialPage() {
  // Hooks
  const navigate = useNavigate();
  const { setUser, setChat } = useChatContext();

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
  async function handleCreateChat() {
    try {
      createRoomSocket(form.username, (response) => {
        if (response.ok) {
          setUser({
            userId: response.user.userId,
            socketId: response.user.socketId,
            username: form.username,
          });

          setChat({
            ownerSocketId: response.user.socketId,
            code: response.code!,
          });

          navigate("/chat");
        } else {
          console.error(response.error);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function handleEnterChat() {
    try {
      joinRoomSocket(form.username, form.roomCode, (response) => {
        if (response.ok) {
          setUser({
            userId: response.user.userId,
            socketId: response.user.socketId,
            username: form.username,
          });

          setChat({
            ownerSocketId: response.ownerSocketId,
            code: form.roomCode,
          });

          navigate("/chat");
        } else {
          console.error(response.error);
        }
      });
    } catch (e) {
      console.log(e);
    }
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
