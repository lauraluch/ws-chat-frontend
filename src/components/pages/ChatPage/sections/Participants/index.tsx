import type { User } from "../../../../../types/User";
import { Card } from "../../../../commons/structure/Card";
import { UserItem } from "../../../../commons/structure/UserItem";
import { Typography } from "../../../../commons/toolkit/Typography";

interface Props {
  participants: User[];
}

export const Participants: React.FC<Props> = ({ participants }) => {
  return (
    <div>
      <Card
        title="Participantes"
        height="100%"
        endComponent={
          <Typography variant="p3" color="var(--color-text-secondary)">
            ({participants.length})
          </Typography>
        }
      >
        {participants.map((user) => (
          <UserItem
            key={`user-${user.userId}`}
            user={user}
            isSelf={user.userId === "user1"}
            isCreator={user.userId === "user1"}
          />
        ))}
      </Card>
    </div>
  );
};
