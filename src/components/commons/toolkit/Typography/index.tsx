import type { PropsWithChildren } from "react";
import type React from "react";
import { variantMap, type TextVariant } from "./variants";

interface Props {
  variant: TextVariant;
  alignment?: "center" | "start" | "end";
  color?: string;
  className?: string;
}

export const Typography: React.FC<PropsWithChildren<Props>> = ({
  variant = "p1",
  alignment = "start",
  className = "",
  color,
  children,
}) => {
  const { tag: Tag, className: variantClass } = variantMap[variant];

  return (
    <Tag
      style={{ color: color || "white" }}
      className={`${variantClass} text-${alignment} ${className}`}
    >
      {children}
    </Tag>
  );
};
