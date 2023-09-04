"use client";
import React from "react";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
function page() {
  return (
    <div>
      <Textarea placeholdertext="input label text" />
      <Button style={{ display: "block" }}>hello</Button>
    </div>
  );
}

export default page;
