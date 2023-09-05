import * as React from "react";
import { styled } from "../stitches.config";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export type SelectOption = {
  label: string;
  value: string | number;
};

//   type MultipleSelectProps = {
//     multiple: true
//     value: SelectOption[]
//     onChange: (value: SelectOption[]) => void
//   }

//   type SingleSelectProps = {
//     multiple?: false
//     value?: SelectOption
//     onChange: (value: SelectOption | undefined) => void
//   }

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};
//   } & (SingleSelectProps | MultipleSelectProps)
const Container = styled("div", {
  position: "relative",
  width: "100%",
  minHeight: "1.5rem",
  border: "0.5rem solid $border",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  outline: "none",
});

const Value = styled("span", {
  flexGrow: "1",
});

const Options = styled("ul", {
  position: "absoute",
  margin: "0",
  padding: "0",
  listStyle: "none",
  display: "block",
  maxHeight: "15rem",
  overflowY: "auto",
  width: "100%",
  left: "0",
  top: "calc(100% + 0.25rem)",
});

const SelectOption = styled("li", {});

function Select({ value, onChange, options }: SelectProps) {
  return (
    <Container>
      <Value></Value>
      <ChevronDownIcon
        style={{ translate: "0 25%", border: "0.25rem solid transparent" }}
      />
      <Options>
        {options.map((option) => (
          <SelectOption key={option.value}>{option.label}</SelectOption>
        ))}
      </Options>
    </Container>
  );
}

export { Select };
