"use client";

import React from "react";

import { ChipsGroup, Chip, Toolbar, ToolbarSeparator, Button } from "@/src";
import { Lightbulb } from "@phosphor-icons/react";

function ToolbarPage() {
  return (
    <div>
      <Toolbar>
        <ChipsGroup type="single">
          <Chip value="1" size="md">
            <Lightbulb />
          </Chip>
          <Chip value="2" size="md">
            <Lightbulb />
          </Chip>
        </ChipsGroup>
        <ToolbarSeparator />
        <ChipsGroup type="multiple">
          <Chip value="1" size="md">
            <Lightbulb />
          </Chip>
          <Chip value="2" size="md">
            <Lightbulb />
          </Chip>
        </ChipsGroup>
      </Toolbar>

      <Toolbar>
        <Button variant="stroke">Discard</Button>
        <Button>Confirm</Button>
      </Toolbar>
    </div>
  );
}

export default ToolbarPage;
