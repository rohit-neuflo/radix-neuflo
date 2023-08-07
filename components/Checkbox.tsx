import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { styled } from "../stitches.config";

interface CheckboxProps {
  id?: string;
}
const Checkbox = ({ id }: CheckboxProps) => (
  <CheckboxRoot id={id}>
    <CheckboxIndicator>
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
);

const CheckboxRoot = styled(RadixCheckbox.Root, {
  all: "unset",
  background: "$surfaceColor",
  width: "16px",
  height: "16px",
  borderRadius: "4px",
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
});

const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  width: "16px",
  height: "16px",
});

const TextLabel = styled("span", {
  margin: "0px 12px",
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
