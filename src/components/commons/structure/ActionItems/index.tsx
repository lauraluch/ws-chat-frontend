import type { PropsWithChildren } from "react";
import type React from "react";
import type { ActionItem } from "../../../../types/ActionItem";

interface Props {
  items: ActionItem[];
}

export const ActionItems: React.FC<PropsWithChildren<Props>> = ({ items }) => {
  return (
    <div className="flex flex-row flex-1 items-center justify-end gap-4">
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
  );
};
