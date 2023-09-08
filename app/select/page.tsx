"use client";
import React from "react";
import { Select, SelectOption } from "@/components/Select";

const options: SelectOption[] = [
  { label: "Chocolate", value: "chocolate" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Vanilla", value: "vanilla"},
];

/* 
const option = [
    tab1:[
      {
        type:"checkbox", label:"chocolate", value:"chocolate"
      }
      {
        type:"checkbox", label:"Strawberry", value:"strawberry"
      }
      {
        type:"checkbox", label:"Vanilla", value:"vanilla"
      }
    ],
    tab2: [
      {
        type:"checkbox", label:"Tomato", value:"tomato"
      }
      {
        type:"checkbox", label:"Broccoli", value:"broccoli"
      }
    ]
]
*/

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
        disabled
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
