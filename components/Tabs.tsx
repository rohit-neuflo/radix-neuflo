import * as RadixTabs from "@radix-ui/react-tabs";
import { styled } from "../stitches.config";

export const Tabs = styled(RadixTabs.Root, {
  display: "flex",
  flexDirection: "column",
  padding: "none",
  width: "fit-content",
  fontFamily: "Poppins",
  variants: {
    size: {
      sm: { height: "2rem" },
      md: { height: "2.5rem" },
    },
  },
});

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
  backgroundColor: "$primary",
  userSelect: "none",
  '&[data-state="active"]': {
    boxShadow: "inset 0 -2px 0 0 $colors$purple",
    backgroundColor: "#FFFFFF03",
    color: "#47AAD4",
  },
  "&:hover": {
    backgroundColor: "#47AAD40A",
    color: "#47AAD4",
  },

  variants: {
    size: {
      sm: {
        fontSize: "sm",
        padding: "0.25rem 0.5rem 0.25rem 0.25rem",
      },
      md: {
        fontSize: "sm",
        padding: "0.5rem 0.75rem 0.5rem 0.5rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const TabContent = styled(RadixTabs.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: "white",

  outline: "none",
});
