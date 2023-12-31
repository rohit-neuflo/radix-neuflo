"use client";
import React from "react";
import { Select, SelectOption, TabOption } from "@/src";

const options: SelectOption[] = [
  { label: "Chocolate", value: "chocolate" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Vanilla", value: "vanilla" },
];

const tabs: TabOption[] = [
  {
    tabName: "flavours",
    options: [
      { type: "checkbox", label: "chocolate", value: "chocolate" },
      { type: "checkbox", label: "Strawberry", value: "strawberry" },
      { type: "checkbox", label: "Vanilla", value: "vanilla" },
    ],
  },
  {
    tabName: "vegetables",
    options: [
      { type: "checkbox", label: "Tomato", value: "tomato" },
      { type: "checkbox", label: "Broccoli", value: "broccoli" },
    ],
  },
];

function SelectPage() {
  const [value, setValue] = React.useState<SelectOption>(options[0]);
  const [value2, setValue2] = React.useState<SelectOption[]>([options[0]]);
  return (
    <div>
      {/* <Select
        title="Title"
        hintText="Select custom"
        options={options}
        value={value}
        onChange={(o) => {
          setValue(o)
        }}
      /> */}
      <Select
        searchable
        multiple
        options={options}
        title="Title"
        hintText="Select custom"
        value={value2}
        onChange={(o) => {
          setValue2(o);
        }}
      />
      {/* <Select
        disabled
        title="Title"
        hintText="Select custom"
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      /> */}
    </div>
  );
}

export default SelectPage;
