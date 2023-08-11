import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { styled } from "../stitches.config";
import { motion } from "framer-motion";

export const TabsList = styled(RadixTabs.List, {
  flexShrink: 0,
  width: "fit-content",
  display: "flex",
});

export const TabTrigger = styled(RadixTabs.Trigger, {
  flexShrink: 0,
  all: "unset",
  width: "fit-content",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$surfaceColor",
  borderRadius: "8px 8px 0px 0px",
  userSelect: "none",
  '&[data-state="active"]': {
    boxShadow: "inset 0 -2px 0 0 $colors$purple",
    backgroundColor: "#FFFFFF03",
    color: "#47AAD4",
  },
  "&:hover": {
    backgroundColor: "rgba(71, 170, 212, 0.0627)",
    color: "#47AAD4",
  },
});

const TabIndicator = styled(motion.div, {
  position: "absolute",
  inset: 0,
  borderRadius: "16px",
  backgroundColor: "$purple",
});

export const TabItem = React.forwardRef<
  React.ElementRef<typeof TabTrigger>,
  React.ComponentPropsWithoutRef<typeof TabTrigger>
>((props, ref) => {
  const { value, tabIndex, children, ...restProps } = props;
  const [isActive, setIsActive] = React.useState<number | undefined>(tabIndex);

  const handleTabClick = () => {
    setIsActive(0);
  };
  return (
    <div style={{ position: "relative" }}>
      <TabTrigger
        value={value}
        ref={ref}
        {...restProps}
        onClick={handleTabClick}
      >
        {isActive === 0 && (
          <TabIndicator
            layoutId={`active-pill-${value}`}
            transition={{ duration: 0.5 }}
          />
        )}
        {children}
      </TabTrigger>
    </div>
  );
});

export const TabContent = styled(RadixTabs.Content, {
  flexGrow: 1,
  padding: "20px",
  backgroundColor: "white",
  outline: "none",
});

export const Tabs = styled(RadixTabs.Root, {
  display: "flex",
  flexDirection: "column",
  padding: "none",
  width: "fit-content",
  fontFamily: "Poppins",
  variants: {
    // variant: {
    //   default: {},
    //   pills: {},
    //   segments: {},
    // },
    size: {
      sm: {
        [`& ${TabTrigger}`]: {
          fontSize: "$sm",
          padding: "0.25rem 0.5rem 0.25rem 0.5rem",
          lineHeight: "1.5rem",
          gap: "0.25rem",
        },
      },
      md: {
        [`& ${TabTrigger}`]: {
          fontSize: "$sm",
          padding: "0.5rem 0.75rem 0.5rem 0.75rem",
          lineHeight: "1.5rem",
          gap: "0.5rem",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    // variant: "default",
  },
});
