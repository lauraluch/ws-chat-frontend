import type { PropsWithChildren } from "react";
import clsx from "clsx";
import type React from "react";
import { Typography } from "../../toolkit/Typography";

interface Props {
  title?: string;
  alignment?: "center" | "start" | "end";
  width?: string;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  title,
  alignment,
  children,
  width,
}) => {
  return (
    <div
      style={{ width, maxWidth: width }}
      className={clsx(
        "flex flex-col gap-1 p-4 rounded-lg bg-general-primary",
        alignment && {
          "items-center": alignment === "center",
          "items-start": alignment === "start",
          "items-end": alignment === "end",
        }
      )}
    >
      <Typography variant="h3">{title}</Typography>
      {children}
    </div>
  );
};
