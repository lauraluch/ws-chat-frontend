import type { JSX } from "react";

export interface ActionItem {
  label: string;
  icon: JSX.Element;
  href?: string;
  onClick?: () => void;
}
