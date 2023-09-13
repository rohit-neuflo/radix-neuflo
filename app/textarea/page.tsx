"use client";
import React from "react";

import { Button, Textarea } from "@/src";
function page() {
  return (
    <div>
      <Textarea placeholdertext="input label text" />
      <Button style={{ display: "block" }}>hello</Button>
    </div>
  );
}

export default page;
