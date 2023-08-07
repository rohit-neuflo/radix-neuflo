"use client";
import React from "react";
import { Checkbox, TextLabel } from "../../components/Checkbox";

function CheckboxPage() {
  return (
    <div style={{ display: "flex" , alignItems:'center',}}>
      <Checkbox id="name" />
      <TextLabel>Label</TextLabel>
    </div>
  );
}

export default CheckboxPage;
