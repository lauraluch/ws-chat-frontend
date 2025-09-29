import type React from "react";
import { Typography } from "../../toolkit/Typography";

interface Props {
  code: string;
}

export const RoomCodeBadge: React.FC<Props> = ({ code }) => {
  return (
    <div className="flex flex-row py-0.5 px-2 bg-general-primary-light rounded-sm w-fit">
      <Typography variant="s2" color="var(--color-general-primary)">
        {code}
      </Typography>
    </div>
  );
};
