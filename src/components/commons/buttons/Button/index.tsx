import clsx from "clsx";
import { Typography } from "../../toolkit/Typography";
import type { ButtonVariant } from "./types";
import { variantStyle } from "./styles";

interface Props {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;

  disabled?: boolean;
  width?: string;
}

export const Button: React.FC<Props> = ({
  label,
  onClick,
  width,
  disabled,
  variant = "primary",
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "flex flex-row items-center justify-center rounded-lg py-2.5 px-4 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",
        variantStyle[variant]
      )}
      style={{ width: width || "fit-content" }}
      onClick={() => {
        if (disabled) return;
        onClick();
      }}
    >
      <Typography
        variant="s2"
        color={variant === "primary" ? "white" : "var(--color-general-primary"}
      >
        {label}
      </Typography>
    </button>
  );
};
