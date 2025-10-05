import { SendHorizonal } from "lucide-react";
import { MESSAGE_INPUT_HEIGHT_PX } from "./constant";
import { useState } from "react";

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
    <div
      className={`flex flex-row items-center w-full gap-4`}
      style={{ height: `${MESSAGE_INPUT_HEIGHT_PX}px` }}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        className={`flex flex-row items-center w-full h-full p-2 bg-white border-1 border-general-primary-light rounded-lg focus:outline-general-darker-background focus:outline-1 focus:border-general-darker-background`}
        placeholder="Digite uma mensagem..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
      />

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
