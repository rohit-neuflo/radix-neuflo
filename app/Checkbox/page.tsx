"use client";
import React from "react";
import { Checkbox } from "../../components/Checkbox";


function CheckboxPage() {
  return (
    <div style={{ margin:"1rem", width: "100px" }}>
      <Checkbox
        id="name"
        label="Label left"
        labelSide="left"
      />
    </div>
  );
}

export default CheckboxPage;
