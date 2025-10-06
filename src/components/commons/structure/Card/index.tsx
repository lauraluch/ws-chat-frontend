import type { JSX, PropsWithChildren } from "react";
import clsx from "clsx";
import type React from "react";
import { Typography } from "../../toolkit/Typography";

interface Props {
  title?: string;
  subtitle?: string;
  endComponent?: JSX.Element;
  icon?: JSX.Element;
  alignment?: "center" | "start" | "end";
  width?: string;
  height?: string;
  gap?: string;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  icon,
  title,
  subtitle,
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
        "flex flex-col gap-1 p-5 rounded-xl bg-general-white drop-shadow-sm",
        alignment && {
          "items-center": alignment === "center",
          "items-start": alignment === "start",
          "items-end": alignment === "end",
        }
      )}
    >
      {icon}

      <div className="flex flex-col gap-0.5">
        <div className="flex flex-row w-full justify-between items-center gap-2">
          <Typography variant="h5" color={"var(--color-text-primary)"}>
            {title}
          </Typography>

          {endComponent}
        </div>

        {subtitle ? (
          <Typography variant="p2" color={"var(--color-text-secondary)"}>
            {subtitle}
          </Typography>
        ) : null}
      </div>

      {children}
    </div>
  );
};
