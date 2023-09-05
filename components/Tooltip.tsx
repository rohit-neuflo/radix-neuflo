import { styled, keyframes } from "../stitches.config";
import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const TooltipProvider = styled(RadixTooltip.Provider, {});

const TooltipRoot = styled(RadixTooltip.Root, {});

const TooltipPortal = styled(RadixTooltip.Portal, {});

const TooltipTrigger = styled(RadixTooltip.Trigger, {});

const TooltipContent = styled(RadixTooltip.Content, {
  borderRadius: "4px",
  display: "flex",
  width: "fit-content",
  height: "24px",
  padding: "12px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "$xs",
  lineHeight: "16px",
  color: "$primary-body-text",
  backgroundColor: "white",
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 6px 6px -6px rgba(0, 0, 0, 0.16)",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  "&:before": {
    content: "",
    // top:"50%",
    position: "absolute",
    left: "0",
    width: "0",
    height: "0",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    backgroundColor: "red",
    zIndex: "100001",
    pointerEvents: "none",
  },
});

const TooltipArrow = styled(RadixTooltip.Arrow, {
  // border:'1px solid red',
  //   boxShadow:
  //   "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 6px 6px -6px rgba(0, 0, 0, 0.16)",
  fill: "$primary-light",
  // stroke:'black',
  border: "1px solid red",
});

interface TooltipProps {
  side?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  content: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Tooltip({
  side = "bottom",
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side={side} align="center">
            {content}
            {/* <TooltipArrow width={11} height={5} /> */}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
}
