import { useChatContext } from "../../../../services/contexts/useChatContext";

export function useChatPage() {
  // Hooks
  const { user, chat } = useChatContext();

  return {
    user,
    chat,
  };
}
