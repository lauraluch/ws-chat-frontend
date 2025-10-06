import type { PropsWithChildren } from "react";
import type React from "react";

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center overflow-hidden justify-center w-full h-[100dvh] max-h-[100dvh] box-border bg-general-background">
      {children}
    </div>
  );
};
