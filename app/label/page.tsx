"use client";
import { Lightbulb } from "@phosphor-icons/react";
import React from "react";
import { Label } from "@/src";

function LabelPage() {
  return (
    <div>
      <Label uppercase="true">
        Your Label
        <Lightbulb />
      </Label>
      <Label>
        Your Label
        <Lightbulb />
      </Label>
    </div>
  );
}

export default LabelPage;
