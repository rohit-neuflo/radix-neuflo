import * as RadixTabs from "@radix-ui/react-tabs";
import { styled } from "../stitches.config";


export const TabsList = styled(RadixTabs.List, {
  flexShrink: 0,
  width: "fit-content",
  display: "flex",
});

export const TabItem = styled(RadixTabs.Trigger, {
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
      sm: { [`& ${TabItem}`]: {
        fontSize: "$sm",
        padding: "0.25rem 0.5rem 0.25rem 0.5rem",
        lineHeight: "1.5rem",
        gap: "0.25rem",
      } },
      md: { [`& ${TabItem}`]: {
        fontSize: "$sm",
        padding: "0.5rem 0.75rem 0.5rem 0.75rem",
        lineHeight: "1.5rem",
        gap: "0.5rem",
      } },
    },
  },
  defaultVariants: {
    size: "md",
    // variant: "default",
  }
});
