import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { styled } from "../stitches.config";

type variantTypes = "default" | "rounded" | "square";
type labelSideTypes = "left" | "right";
interface CheckboxProps {
  id?: string;
  variant?: variantTypes;
  labelSide?: labelSideTypes;
  label: string;
}
const Checkbox = ({
  id,
  variant,
  labelSide = "right",
  label,
}: CheckboxProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    {labelSide === "left" && <TextLabel htmlFor={id}>{label}</TextLabel>}
    <CheckboxRoot id={id} variant={variant}>
      <CheckboxIndicator variant={variant}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.5 7.47059L6.83333 11L12.5 5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </CheckboxIndicator>
    </CheckboxRoot>
    {labelSide === "right" && <TextLabel htmlFor={id}>{label}</TextLabel>}
  </div>
);

const CheckboxRoot = styled(RadixCheckbox.Root, {
  all: "unset",
  background: "$surfaceColor",
  width: "16px",
  height: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid $secondary-body-text",
  "&[data-state=checked]": {
    background: "$primary",
  },
  "&:hover": {
    "&[data-state=unchecked]": {
      background: "$secondary",
    },
    boxShadow: " 0px 0px 0px 4px $colors$secondary",
  },
  "&:focus": {},

  variants: {
    variant: {
      default: {
        borderRadius: "4px",
      },
      rounded: {
        borderRadius: "9999px",
      },
      square: {
        borderRadius: "0px",
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  width: "16px",
  height: "16px",
  variants: {
    variant: {
      default: {
        borderRadius: "4px",
      },
      rounded: {
        borderRadius: "9999px",
      },
      square: {
        borderRadius: "0px",
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

const TextLabel = styled("label", {
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
});

export { Checkbox, TextLabel };
