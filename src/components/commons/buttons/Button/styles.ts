import type { ButtonVariant } from "./types";

export const variantStyle: Record<ButtonVariant, string> = {
  primary: "bg-general-primary-medium text-white hover:bg-general-primary",
  secondary:
    "bg-layout-surface text-general-primary hover:bg-layout-surface-dark",
};
