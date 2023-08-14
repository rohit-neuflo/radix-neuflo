import { styled, keyframes } from "../stitches.config";
import React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { Bell, CaretLeft, X } from "@phosphor-icons/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

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

const PopoverPortal = styled(RadixPopover.Portal);

const RadixPopoverContainer = styled(RadixPopover.Content, {
  borderRadius: "8px",
  width: 344,
  backgroundColor: "white",
  boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 8px 24px -6px rgba(0, 0, 0, 0.16)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

function PopoverContainer({ children }: { children: React.ReactNode }) {
  return (
    <PopoverPortal>
      <RadixPopoverContainer>{children}</RadixPopoverContainer>
    </PopoverPortal>
  );
}

const Popover = styled(RadixPopover.Root);

const PopoverArrow = styled(RadixPopover.Arrow, {
  fill: "white",
});

const PopoverTrigger = styled(RadixPopover.Trigger);

const PopoverClose = styled(RadixPopover.Close, {
  backgroundColor: "none",
  border: "none",
});

const PopoverContentStyles = {
  padding: "1.5rem",
};

function PopoverHeader({ title }: { title?: string }) {
  function DialogClose() {
    return (
      <PopoverClose asChild>
        <X />
      </PopoverClose>
    );
  }
  return (
    <div
      style={{
        height: "4rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Header title={title} divider iconsRight={[{ Icon: DialogClose }]} />
      </div>
    </div>
  );
}

const PopoverContent = styled("div", PopoverContentStyles);

const PopoverFooter = styled(Footer);

export {
  Popover,
  PopoverContainer,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
};
