"use client";
import React from "react";
import Select from "react-select";
import { Input } from "../../components/Input";

interface Custom {
  innerRef: () => void;
}

function CustomInput({ innerRef, ...innerProps }: Custom) {
  return (
    <input
      ref={innerRef}
      {...innerProps}
      placeholder="i love you gopi kutta"
      style={{ position: "absolute" }}
    />
  );
}

function SelectPage() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <Select options={options} components={{ Input: CustomInput }} />
    </div>
  );
}

export default SelectPage;
