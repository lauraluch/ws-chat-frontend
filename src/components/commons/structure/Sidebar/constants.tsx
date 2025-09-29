import { LogOut, MessageCircleMore, UserRound } from "lucide-react";
import type { SidebarItem } from "../../../../types/SidebarItem";

export function getSidebarItems(): SidebarItem[] {
  return [
    {
      label: "Signout",
      icon: <LogOut size={20} color="var(--color-text-primary)" />,
      onClick: () => {
        console.log("Signout clicked");
      },
    },
    {
      label: "Chat",
      icon: <MessageCircleMore size={20} color="var(--color-text-primary)" />,
      onClick: () => {
        console.log("Chat messages clicked");
      },
    },
    {
      label: "User",
      icon: <UserRound size={20} color="var(--color-text-primary)" />,
      onClick: () => {
        console.log("User clicked");
      },
    },
  ];
}
