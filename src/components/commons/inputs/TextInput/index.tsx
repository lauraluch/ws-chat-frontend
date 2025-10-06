import React, { useImperativeHandle, useRef } from "react";
import type { TextInputMethods } from "./types";
import { Typography } from "../../toolkit/Typography";

interface Props {
  value: string;
  onValueChange: (newValue: string) => void;
  placeholder?: string;
  title?: string;
}

export const TextInput = React.forwardRef<TextInputMethods, Props>(
  ({ value, placeholder, title, onValueChange }, ref) => {
    // Refs
    useImperativeHandle(ref, handleRefMethods);

    const inputRef = useRef<HTMLInputElement>(null);

    // Functions
    function handleRefMethods() {
      return { focus: handleFocus, blur: handleBlur };
    }

    function handleFocus() {
      inputRef?.current?.focus();
    }

    function handleBlur() {
      inputRef?.current?.blur();
    }

    return (
      <div className="flex flex-col gap-1">
        {title ? <Typography variant="s1">{title}</Typography> : null}

        <input
          ref={inputRef}
          className="flex flex-row border-layout-border border-1 p-2 rounded-md focus:outline-1 focus:outline-general-background focus:border-layout-border"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </div>
    );
  }
);
