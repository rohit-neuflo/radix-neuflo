"use client";

import React from "react";

import { Toolbar, ToolbarSeparator } from "../../components/Toolbar";
import { ChipsGroup, Chip } from "@/components/Chips";
import { Lightbulb } from "@phosphor-icons/react";
import { Button } from "@/components/Button";

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
