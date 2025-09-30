import type { JSX, PropsWithChildren } from "react";
import clsx from "clsx";
import type React from "react";
import { Typography } from "../../toolkit/Typography";

interface Props {
  title?: string;
  endComponent?: JSX.Element;
  alignment?: "center" | "start" | "end";
  width?: string;
  height?: string;
  gap?: string;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  title,
  endComponent,
  alignment,
  children,
  height,
  width,
  gap,
}) => {
  return (
    <div
      style={{ width, maxWidth: width, height, maxHeight: height, gap }}
      className={clsx(
        "flex flex-col gap-1 p-4 rounded-xl bg-general-white",
        alignment && {
          "items-center": alignment === "center",
          "items-start": alignment === "start",
          "items-end": alignment === "end",
        }
      )}
    >
      <div className="flex flex-row w-full justify-between items-center gap-2">
        <Typography variant="h5" color={"var(--color-text-primary)"}>
          {title}
        </Typography>

        {endComponent}
      </div>

      {children}
    </div>
  );
};
