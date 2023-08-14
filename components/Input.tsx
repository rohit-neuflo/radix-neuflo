import React, { useState, forwardRef } from "react";
import { styled } from "../stitches.config";

type StateVariant = "normal" | "error" | "disabled";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "number" | "email";
  state?: StateVariant;
  placeholder?: string;
  value?: number | string;
  onChange?: (e: any) => void;
  Size?: "md" | "lg" | "xl";
}

const InputContainer = styled("div", {
  margin: "0.25rem",
  position: "relative",
  width: "100%",
});

const InputBase = styled("input", {
  fontFamily: "Poppins",
  padding: "12px 16px",
  outline: "1px solid $border",
  borderRadius: "8px",
  width: "100%",
  border: "none",
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
    inputSize: {
      md: {
        padding: "8px 16px",
      },
      lg: {
        padding: "12px 16px",
      },
      xl: {
        padding: "16px 16px",
      },
    },
  },
  "&:focus": {
    border: "none",
    outline: "2px solid $primary",
  },
  defaultVariants: {
    inputState: "normal", 
  },
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
  width: "fit-content",
  height: "50%",
  background: "none",
  border: "none",
  cursor: "pointer",
  variants: {
    position: {
      top: {
        top: 0,
        right: 0,
        transform: "translateY(0)",
      },
      bottom: {
        bottom: 0,
        right: 0,
        transform: "translateY(0)",
      },
    },
  },
});

const ArrowIcon = styled("span", {
  fontSize: "12px",
});

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

  const { type, state, Size, ...restProps } = props; 

  const [showPassword, setShowPassword] = useState(false);
  const [numberValue, setNumberValue] = useState<number | string>(0);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleNumberChange = (value: number | string) => {
    setNumberValue(value);
  };

  return (
    <InputContainer ref={ref}>
      {type === "password" ? (
        <NumberInputContainer>
          <InputBase
            ref={ref}
            type={showPassword ? "text" : "password"}
            {...restProps} // Use restProps here
            inputState={state}
            inputSize={Size}
          />
        </NumberInputContainer>
      ) : type === "email" ? (
        <NumberInputContainer>
          <InputBase
            ref={ref}
            type={type}
            {...restProps}
            inputState={state}
            inputSize={Size}
          />
        </NumberInputContainer>
      ) : type === "number" ? (
        <NumberInputContainer>
          <NumberInputBase
            ref={ref}
            type="text"
            value={numberValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const inputValue = e.target.value;
              if (/^\d*$/.test(inputValue)) {
                handleNumberChange(inputValue);
              }
            }}
            {...restProps} 
            inputState={state}
            inputSize={Size}
          />
          <Button
            className="top"
            type="button"
            position="top"
            onClick={() => handleNumberChange(Number(numberValue) + 1)}
            css={{
              borderTopRightRadius: "8px",
              "&:hover": { backgroundColor: "$secondary" },
            }}
          >
            <ArrowIcon css={{}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.625 7.6875L6 4.3125L9.375 7.6875"
                  stroke="#999CA0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </ArrowIcon>
          </Button>
          <Button
            type="button"
            className="bottom"
            position="bottom"
            onClick={() => handleNumberChange(Number(numberValue) - 1)}
            css={{
              borderBottomRightRadius: "8px",
              "&:hover": { backgroundColor: "$secondary" },
            }}
          >
            <ArrowIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M9.375 4.3125L6 7.6875L2.625 4.3125"
                  stroke="#999CA0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </ArrowIcon>
          </Button>
        </NumberInputContainer>
      ) : (
        <NumberInputContainer>
          <InputBase
            ref={ref}
            type={type}
            {...restProps}
            inputState={state}
            inputSize={Size}
          />
        </NumberInputContainer>
      )}
      {type === "password" && (
        <Button
          onClick={(e) => {
            togglePasswordVisibility();
            e.preventDefault();
          }}
          css={{
            marginRight: "0.1rem",
            fontFamily: "Poppins",
            position: "absolute",
            top: "50%",
            right: "8px",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            "&:hover": { backgroundColor: "none" },
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </Button>
      )}
    </InputContainer>
  );
});

export { Input };
