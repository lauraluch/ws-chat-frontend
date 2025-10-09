import React, { useState } from "react";
import { Typography } from "../../toolkit/Typography";
import { Copy, Check } from "lucide-react";

interface Props {
  code: string;
  feedbackMs?: number;
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
}

export const RoomCodeBadge: React.FC<Props> = ({ code, feedbackMs = 1500 }) => {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (await copyToClipboard(code)) {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, feedbackMs);
    }
  }

  return (
    <div className="flex flex-row py-0.5 items-center gap-2">
      <div className="flex flex-row py-0.5 px-2 bg-general-primary-light rounded-sm w-fit items-center gap-2">
        <Typography variant="h5" color="var(--color-general-primary)">
          {code}
        </Typography>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center p-1 rounded-sm
                   cursor-pointer hover:opacity-80 active:scale-110"
      >
        {copied ? (
          <Check
            size={16}
            strokeWidth={3}
            className="pointer-events-none"
            color="var(--color-general-primary)"
          />
        ) : (
          <Copy
            size={16}
            strokeWidth={3}
            className="pointer-events-none"
            color="var(--color-general-primary)"
          />
        )}
      </button>
    </div>
  );
};
