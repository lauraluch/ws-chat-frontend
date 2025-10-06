import type { ButtonVariant } from "./types";

export const variantStyle: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-l from-[#9892FE] to-[#B6BDEE] text-white hover:opacity-90",
  secondary:
    "bg-layout-surface text-general-primary hover:bg-layout-surface-dark",
};
