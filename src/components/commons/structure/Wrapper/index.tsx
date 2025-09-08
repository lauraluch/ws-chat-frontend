import type { PropsWithChildren } from "react";
import type React from "react";

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100dvh] bg-[#1c1c1c]">
      {children}
    </div>
  );
};
