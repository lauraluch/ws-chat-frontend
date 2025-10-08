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
        "flex relative flex-row w-full",
        isSelf ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={clsx(
          "flex  flex-col p-3 gap-2 max-w-[380px] w-fit text-wrap break-words whitespace-pre-wrap rounded-lg mb-[24px] drop-shadow-sm",
          isSelf ? "bg-general-primary-medium" : "bg-white"
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
      </div>

      <div
        className="flex absolute bottom-[0px] flex-row w-full whitespace-nowrap px-2"
        style={{
          justifyContent: isSelf ? "flex-end" : "flex-start",
        }}
      >
        <Typography variant="p4" color="var(--color-text-secondary)">
          {formatTimestamp(message.timestamp)}
        </Typography>
      </div>
    </div>
  );
};
