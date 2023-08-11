import React, { useState } from "react";
import { styled } from "../stitches.config";
import { InputHTMLAttributes } from "react";
import { VariantProps } from "@stitches/react";

type StateVariant = "normal" | "error" | "disabled";
interface InputProps {
  type?: "text" | "password" | "number";
  state?: StateVariant;
  placeholder?: string;
}

const InputContainer = styled("div", {
  margin: "0.25rem",
  position: "relative",
  //   border:"1px solid red",
  width: "100%",
  overflow: "none",
});

const InputBase = styled("input", {
  fontFamily: "Poppins",
  padding: "12px 16px",
  outline: "1px solid $border",
  border: "none",
  borderRadius: "8px",
  width: "100%",
  //   borderColor: "gray",
  variants: {
    inputState: {
      error: {
        outline: "2px solid red",
      },
      disabled: {
        opacity: 0.5,
        pointerEvents: "none",
      },
      normal: {},
    },
  },
  "&:focus": {
    border: "none",
    outline: "2px solid $primary",
  },
  defaultVariants: {
    inputState: "normal", // Set the default inputState variant
  },

  //   "&[state]": {},
});

const NumberInputContainer = styled("div", {
  position: "relative",
  display: "flex",
});

const NumberInputBase = styled("input", {
  ...InputBase,
  paddingRight: "40px",
  appearance: "none",
});

const Button = styled("button", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "50%",
  background: "#ccc",
  border: "none",
  cursor: "pointer",
  fontSize: "$sm",
  lineHeight: "1",
  textAlign: "center",
  variants: {
    position: {
      top: {
        top: 0,
        transform: "translateY(0)",
      },
      bottom: {
        bottom: 0,
        transform: "translateY(0)",
      },
    },
  },
});

const ArrowIcon = styled("span", {
  fontSize: "12px",
});

const Input: React.FC<InputProps> = ({
  type = "text",
  state = "normal",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [numberValue, setNumberValue] = useState<number | string>(0);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleNumberChange = (value: number | string) => {
    setNumberValue(value);
  };

  return (
    <InputContainer>
      {type === "password" ? (
        <InputBase
          type={showPassword ? "text" : "password"}
          {...props}
          inputState={state}
        />
      ) : type === "number" ? (
        <NumberInputContainer>
          <NumberInputBase
            type="text"
            value={numberValue}
            onChange={(e: any) => {
              const inputValue = e.target.value;
              if (/^\d*$/.test(inputValue)) {
                handleNumberChange(inputValue);
              }
            }}
            {...props}
            inputState={state}
          />
          <Button
            type="button"
            position="top"
            onClick={() => handleNumberChange(Number(numberValue) + 1)}
          >
            <ArrowIcon css={{}}>↑</ArrowIcon>
          </Button>
          <Button
            type="button"
            position="bottom"
            onClick={() => handleNumberChange(Number(numberValue) - 1)}
          >
            <ArrowIcon>↓</ArrowIcon>
          </Button>
        </NumberInputContainer>
      ) : (
        <InputBase type={type} {...props} inputState={state} />
      )}
      {type === "password" && (
        <Button
          onClick={togglePasswordVisibility}
          css={{
            fontFamily: "Poppins",
            position: "absolute",
            top: "50%",
            right: "8px",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </Button>
      )}
    </InputContainer>
  );
};

export { Input };
