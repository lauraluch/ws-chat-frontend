import { SendHorizonal } from "lucide-react";
import { MESSAGE_INPUT_HEIGHT_PX, MESSAGE_SIZE_LIMIT } from "./constant";
import { useState } from "react";
import { Typography } from "../../toolkit/Typography";

interface Props {
  onSendMessage: (message: string) => void;
}

export const MessageInput: React.FC<Props> = ({ onSendMessage }) => {
  // States
  const [inputValue, setInputValue] = useState("");

  // Functions
  function handleSendMessage() {
    onSendMessage(inputValue);
    setInputValue("");
  }

  return (
    <div className={`flex flex-row items-end w-full gap-4 `}>
      <div className="flex flex-col w-full items-end">
        <div>
          <Typography variant="p4" color={"var(--color-text-placeholder)"}>
            {inputValue?.length}/{MESSAGE_SIZE_LIMIT}
          </Typography>
        </div>

        <input
          value={inputValue}
          maxLength={300}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          style={{ height: `${MESSAGE_INPUT_HEIGHT_PX}px` }}
          className={`flex flex-row items-center w-full h-full p-2 bg-white border-1 border-general-primary-light rounded-lg focus:border-general-darker-background focus:outline-1 focus:outline-general-darker-background outline-none transition-all duration-150`}
          placeholder="Digite uma mensagem..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
      </div>

      <div
        className={`flex flex-row items-center justify-center h-full bg-general-primary-lightest rounded-lg hover:cursor-pointer hover:bg-general-primary-light transition-colors duration-200`}
        style={{
          width: `${MESSAGE_INPUT_HEIGHT_PX}px`,
          height: `${MESSAGE_INPUT_HEIGHT_PX}px`,
        }}
        onClick={handleSendMessage}
      >
        <SendHorizonal size={20} color={"var(--color-general-primary)"} />
      </div>
    </div>
  );
};
