import { styled } from "../stitches.config";
import { Textlabel } from "./Textlabel";
import Link from "next/link";

export const MenuItem = styled("div", {
  fontFamily: "Poppins",
  width: "100%",
  display: "flex",
  gap: "8px",
  borderRadius: "8px",
  boxSizing: "border-box",
  variants: {
    size: {
      md: {
        height: "24px",
        padding: "8px",
      },
      lg: {
        height: "48px",
        padding: "12px",
      },
      xl: {
        height: "56px",
        padding: "8px 12px",
      },
      "2xl": {
        height: "64px",
        padding: "12px",
      },
    },
    variant: {
      default: {},
      ghost: {},
    },
  },
  [`& > ${Textlabel}`]: {
    flexGrow: 1,
  },
  defaultVariants: {
    size: "lg",
    variant: "default",
  },
});

export const MenuLink = styled(Link, {
  textDecoration: "none",
  color: "$primary-text-forced-black",
  fontFamily: "Poppins",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  borderRadius: "8px",
  boxSizing: "border-box",
  "&:active": {
    backgroundColor: "$secondary",
  },
  variants: {
    size: {
      md: {
        height: "24px",
        padding: "8px",
      },
      lg: {
        height: "48px",
        padding: "12px",
      },
      xl: {
        height: "56px",
        padding: "8px 12px",
      },
      "2xl": {
        height: "64px",
        padding: "12px",
      },
    },
    variant: {
      default: {},
      ghost: {},
    },
  },
  [`& > ${Textlabel}`]: {
    flexGrow: 1,
  },
  defaultVariants: {
    size: "lg",
    variant: "default",
  },
});
