"use client";
import React from "react";
import { ChipsGroup, Chip } from "@/src";
import { Lightbulb } from "@phosphor-icons/react";
function ChipsPage() {
  return (
    <div style={{ height: "300px", width: "200px" }}>
      <ChipsGroup type="multiple">
        <Chip value="1" size="sm">
          Hello world
          <Lightbulb />
        </Chip>
        <Chip value="2" size="md">
          <Lightbulb /> Hello World
        </Chip>
        <Chip value="3" size="md">
          Hello world
        </Chip>
      </ChipsGroup>
    </div>
  );
}

export default ChipsPage;
