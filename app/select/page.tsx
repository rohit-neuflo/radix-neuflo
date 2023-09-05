"use client";
import React from "react";
import { Select, SelectOption } from "@/components/Select";

const options = [
  { label: "Chocolate", value: 1 },
  { label: "Strawberry", value: 2 },
  { label: "Vanilla", value: 3 },
];

function SelectPage() {
  const [value, setValue] = React.useState<SelectOption | undefined>(
    options[0]
  );
  const [value2, setValue2] = React.useState<SelectOption | undefined>();
  return (
    <div>
      <Select
        title="Title"
        hintText="Select custom"
        options={options}
        value={value}
        onChange={(o) => setValue(o)}
      />
      <Select
        title="Title"
        hintText="Select custom"
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </div>
  );
}

export default SelectPage;
