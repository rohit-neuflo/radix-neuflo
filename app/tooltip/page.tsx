"use client";
import React from "react";
import { Tooltip } from "../../components/Tooltip";
import { Button } from "../../components/Button";

function TooltipPage() {
  return (
    <div>
      <Tooltip side="right" content="Tooltip content">
        <Button>Tooltip trigger</Button>
      </Tooltip>
    </div>
  );
}

export default TooltipPage;
