import type { PropsWithChildren } from "react";
import type React from "react";
import type { SidebarItem } from "../../../../types/SidebarItem";

interface Props {
  items: SidebarItem[];
}

export const Sidebar: React.FC<PropsWithChildren<Props>> = ({ items }) => {
  return (
    <div
      className={
        "flex flex-1 flex-col h-full max-w-[60px] p-2 items-center bg-general-white gap-4 rounded-xl"
      }
    >
      <div className="flex flex-col flex-1 items-center"></div>

      <div className="flex flex-col flex-1 items-center justify-center gap-4">
        {items.map((item, index) => (
          <div
            key={"sidebar-item-" + index}
            onClick={item.onClick}
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-md bg-transparent hover:bg-layout-surface transition-colors duration-200"
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-1 items-center"></div>
    </div>
  );
};
