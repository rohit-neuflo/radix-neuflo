"use client";
import React from "react";
import {Select} from "@/components/Select"

const options = [
  { label: "Chocolate", value: 1, },
  { label: "Strawberry", value:2, },
  { label: "Vanilla", value: 3, },
];

function SelectPage() {
  const [value,setValue] = React.useState<typeof options[0] | undefined>(options[0])
  return (
    <div>
      <Select options={options} value={value} onChange={ o => setValue(o)}/>
    </div>
  );
}

export default SelectPage;
