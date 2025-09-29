import { Typography } from "../../toolkit/Typography";
import type { User } from "../../../../types/User";
import { Crown } from "lucide-react";

interface Props {
  user: User;
  isSelf?: boolean;
  isCreator?: boolean;
}

export const UserItem: React.FC<Props> = ({ user, isSelf, isCreator }) => {
  return (
    <div
      className={
        "flex flex-row w-full py-3 px-4 items-center gap-2 justify-between bg-transparent hover:bg-layout-surface rounded-md"
      }
    >
      <div className="flex flex-row gap-1.5 items-center overflow-hidden">
        <div className="flex-shrink-0">
          <Typography variant="s1" className="truncate max-w-full">
            {user.username}
          </Typography>
        </div>

        {isSelf ? (
          <Typography variant="p4" color="var(--color-text-secondary)">
            (você)
          </Typography>
        ) : null}
      </div>

      {isCreator ? <Crown size={20} color="#ffba19" /> : null}
    </div>
  );
};
