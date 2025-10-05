import { useChatContext } from "../../../../../services/contexts/useChatContext";
import type { User } from "../../../../../types/User";
import { Card } from "../../../../commons/structure/Card";
import { UserItem } from "../../../../commons/structure/UserItem";
import { Typography } from "../../../../commons/toolkit/Typography";

interface Props {
  participants: User[];
}

export const Participants: React.FC<Props> = ({ participants }) => {
  const { chat, user } = useChatContext();

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
        {participants.map((participant) => (
          <UserItem
            key={`user-${participant.userId}`}
            user={participant}
            isSelf={participant.userId === user?.userId}
            isCreator={participant.socketId === chat?.ownerSocketId}
          />
        ))}
      </Card>
    </div>
  );
};
