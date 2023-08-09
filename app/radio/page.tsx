"use client";
import React from "react";
import { RadioGroup, Radio } from "../../components/Radio";

export default function RadioPage() {
  return (
    <div style={{ width: "100px" }}>
      <RadioGroup>
        <Radio value="1" label="label 1" id="1" />
        <Radio value="2" label="label 2" labelSide="left" id="2" />
        <Radio value="3" label="label 3" id="3" />
      </RadioGroup>
    </div>
  );
}
