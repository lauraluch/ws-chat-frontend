import type { JSX } from "react";

export interface SidebarItem {
  label: string;
  icon: JSX.Element;
  href?: string;
  selected?: boolean;
  onClick?: () => void;
}
