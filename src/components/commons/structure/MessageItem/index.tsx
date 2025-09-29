import clsx from "clsx";
import { formatTimestamp } from "../../../../services/functions/formatTimestamp";
import type { Message } from "../../../../types/Message";
import { Typography } from "../../toolkit/Typography";

interface Props {
  message: Message;
  isSelf?: boolean;
}

export const MessageItem: React.FC<Props> = ({ message, isSelf }) => {
  return (
    <div
      className={clsx(
        "flex flex-row w-full",
        isSelf ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={clsx(
          "flex relative flex-col p-3 gap-2 max-w-[380px] w-fit text-wrap  rounded-lg mb-[24px]",
          isSelf ? "bg-general-darker-background" : "bg-general-white"
        )}
      >
        {isSelf ? null : (
          <Typography variant="s1">{message.username}</Typography>
        )}

        <Typography
          variant="p2"
          color={
            isSelf
              ? "var(--color-general-white)"
              : "var(--color-text-secondary)"
          }
        >
          {message.text}
        </Typography>

        <div className="flex absolute bottom-[-24px] left-0 flex-row justify-end w-full">
          <Typography variant="p4" color="var(--color-text-secondary)">
            {formatTimestamp(message.timestamp)}
          </Typography>
        </div>
      </div>
    </div>
  );
};
