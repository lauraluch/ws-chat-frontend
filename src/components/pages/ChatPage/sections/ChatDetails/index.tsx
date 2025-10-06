import { useChatContext } from "../../../../../services/contexts/useChatContext";
import { Card } from "../../../../commons/structure/Card";
import { RoomCodeBadge } from "../../../../commons/structure/RoomCodeBadge";
import { Typography } from "../../../../commons/toolkit/Typography";

export const ChatDetails: React.FC = () => {
  const { chat } = useChatContext();

  return (
    <div>
      <Card
        title="Dados do chat"
        gap="8px"
        icon={<img src="/logo.png" alt="Logo" className="w-12 h-auto" />}
      >
        <div className="flex flex-row gap-2 items-center">
          {/* <div className="flex flex-row items-center justify-center w-full"> */}
          <RoomCodeBadge code={chat?.code || ""} />
          {/* </div> */}
        </div>

        <div className="flex flex-row gap-2 items-center mt-2">
          <Typography variant="p3" color="var(--color-text-placeholder)">
            {/* {} */}
          </Typography>
        </div>
      </Card>
    </div>
  );
};
