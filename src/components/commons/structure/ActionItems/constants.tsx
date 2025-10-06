import { LogOut, MessageCircleOff } from "lucide-react";
import type { ActionItem } from "../../../../types/ActionItem";

export function getSidebarItems(
  onSignoutClick: () => void,
  onClearChatClick: () => void
): ActionItem[] {
  return [
    {
      label: "Signout",
      icon: <LogOut size={20} color="var(--color-text-primary)" />,
      onClick: onSignoutClick,
    },
    {
      label: "Clear chat",
      icon: <MessageCircleOff size={20} color="var(--color-text-primary)" />,
      onClick: onClearChatClick,
    },
  ];
}
