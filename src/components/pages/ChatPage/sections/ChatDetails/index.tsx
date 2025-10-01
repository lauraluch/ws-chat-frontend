import { Card } from "../../../../commons/structure/Card";
import { RoomCodeBadge } from "../../../../commons/structure/RoomCodeBadge";
import { Typography } from "../../../../commons/toolkit/Typography";

export const ChatDetails: React.FC = () => {
  return (
    <div>
      <Card title="Dados do chat">
        <div className="flex flex-row gap-2 items-center">
          <Typography variant="p2" color="var(--color-text-secondary)">
            Código da sala:{" "}
          </Typography>
          <RoomCodeBadge code={"e28bfd-3u5dz-i388dm"} />
        </div>

        <div className="flex flex-row gap-2 items-center mt-1">
          <Typography variant="p3" color="var(--color-text-placeholder)">
            Criada em 30/09/2025 às 07:34
          </Typography>
        </div>
      </Card>
    </div>
  );
};
