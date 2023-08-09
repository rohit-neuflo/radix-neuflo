import React from "react";
import * as RadixToolbar from "@radix-ui/react-toolbar";
import { styled } from "../stitches.config";

const Toolbar = styled(RadixToolbar.Root, {
  display: "flex",
  // alignItems: "center",
  minWidth: "max-content",
  padding: "8px 8px",
  width: "fit-content",
  gap: "8px",
  borderRadius: "12px",
  backgroundColor: "$surfaceColor",
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 8px 24px -6px rgba(0, 0, 0, 0.16)",
});

const ToolbarSeparator = styled(RadixToolbar.Separator, {
  width: 1,
  backgroundColor: "$secondary",
  margin: "0 10px",
});

export { Toolbar, ToolbarSeparator };
