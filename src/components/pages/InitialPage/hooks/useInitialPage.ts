/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import type { ChatForm } from "../types";
import { useChatContext } from "../../../../services/contexts/useChatContext";
import { useNavigate } from "react-router-dom";
import { socket } from "../../../../services/socket";

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
    // createUser({
    //   userId: "1",
    //   username: form.username,
    // });

    // const roomCode = generateRoomCode();

    // createChat({
    //   code: roomCode,
    // });

    try {
      await createRoom(form.username);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleEnterChat() {
    // createUser({
    //   userId: "1",
    //   username: form.username,
    // });

    // createChat({
    //   code: form.roomCode,
    // });

    try {
      await joinRoom(form.username, form.roomCode);
    } catch (e) {
      console.log(e);
    }
  }

  async function createRoom(username: string) {
    socket.emit("create_room", { username }, (response: any) => {
      if (response.ok) {
        console.log("[createRoom]", response);

        setUser({
          userId: "1dasjhg54jb3hg4",
          username: form.username,
        });

        setChat((prev) => ({
          ...prev,
          code: response.code,
        }));

        navigate("/chat");
      } else {
        console.error(response.error);
      }
    });
  }

  async function joinRoom(username: string, code: string) {
    socket.emit("join_room", { username, code }, (response: any) => {
      if (response.ok) {
        console.log("[joinRoom]", response);

        setUser({
          userId: "123ruf455g4hj",
          username: form.username,
        });

        setChat((prev) => ({
          ...prev,
          code: code,
        }));

        navigate("/chat");
      } else {
        console.error(response.error);
        console.log("[joinRoom]", response);
      }
    });
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
