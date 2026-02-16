import React, {
  ChangeEvent,
  KeyboardEvent,
  useRef,
  useState,
} from "react";

type Props = {
  initial: string;
  placeholder?: string;
  name: string;
  onSubmit: (name: string, text: string) => void;
  onBlur?: (name: string, text: string) => void;
  type?: React.HTMLInputTypeAttribute;
};

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

  const handleSubmit = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(name, textInput);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
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
        ref={ref}
        id={name}
        type={type}
        placeholder={placeholder}
        autoFocus={true}
        value={textInput}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};
