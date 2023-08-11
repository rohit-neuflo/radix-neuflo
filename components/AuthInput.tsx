import { styled } from "../stitches.config";
import React, { useRef, useState, useEffect } from "react";

const AuthCodeContainer = styled("div", {
  display: "flex",
  width: "316px",
  height: "40px",
  alignItems: "flex-start",
  gap: "8px",
  flexShrink: 0,
});

const AuthCodeInput = styled("input", {
  fontFamily: "Poppins",
  padding: "16px",
  width: "14px",
  fontSize: "16px",
  textAlign: "center",
  borderRadius: "8px",
  border: "1px solid $border",
  outline: "none",
  "&:focus": {
    outline: "2px solid $primary",
  },
  "&:hover": {
    outline: "2px solid $border",
  },
  variants: {
    error: {
      true: {
        border: "2px solid red",
        "&:hover": {
          outline: "1px solid red",
        },
      },
    },
  },
});

interface AuthInputProps {
  fields: number;
  error?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
  fields,
  error = false,
  value,
  onChange,
}) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [inputValues, setInputValues] = useState<Array<string>>(
    Array(fields).fill("")
  );
  const handleInput = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    if (value.length === 1 && index < fields - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (inputRefs.current[index]?.value && value.length === 1) {
      e.preventDefault();
    }

    if (value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (value === "" && index === 0) {
      inputRefs.current[index]?.focus();
    }

    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    if (onChange) {
      onChange(newInputValues.join(""));
    }

    if (value === "" && index < fields - 1) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (error) {
      setInputValues(Array(fields).fill(""));
    }
  }, [error, fields]);

  return (
    <AuthCodeContainer>
      {Array.from({ length: fields }, (_, index) => (
        <AuthCodeInput
          key={index}
          type="tel"
          maxLength={1}
          value={inputValues[index]}
          onChange={(e) => handleInput(index, e)}
          ref={(el) => (inputRefs.current[index] = el)}
          error={error}
        />
      ))}
    </AuthCodeContainer>
  );
};

export default AuthInput;
