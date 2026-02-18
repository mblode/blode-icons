import type React from "react";
import { type ChangeEvent, type KeyboardEvent, useRef, useState } from "react";

interface Props {
  initial: string;
  name: string;
  onBlur?: (name: string, text: string) => void;
  onSubmit: (name: string, text: string) => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const InputField = ({
  initial,
  placeholder,
  name,
  onSubmit,
  onBlur,
  type = "text",
}: Props) => {
  const [textInput, setTextInput] = useState(initial);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(name, textInput);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur(name, textInput);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{name}</label>
      <input
        autoFocus={true}
        id={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={textInput}
      />
    </div>
  );
};
