import { styled } from "../stitches.config";

export const Button = styled("button", {
  fontWeight: "$semibold",
  fontStyle: "$normal",
  fontFamily: "Poppins",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  border:'none',
  
  
  // _active: {
  //   boxShadow: "0px 0px 0px 4px rgba(78, 70, 180, 0.2)",
  // },
  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        padding: "4px 8px",
        height: "24px",
        width: "fit-content",
        gap: "4px",
      },
      sm: {
        fontSize: "$sm",
        padding: "4px 12px",
        height: "32px",
        width: "fit-content",
        gap: "4px",
      },
      md: {
        fontSize: "$sm",
        padding: "8px 16px ",
        height: "40px",
        width: "fit-content",
        gap: "4px",
      },
      lg: {
        fontSize: "$md",
        padding: "12px 16px",
        height: "48px",
        width: "fit-content",
        gap: "4px",
      },
      xl: {
        fontSize: "$md",
        padding: "16px 24px",
        height: "56px",
        width: "fit-content",
        gap: "4px",
      },
    },

    variant: {
      primary: {
        color: "$surfaceColor",
        stroke: "$primary-button-text-forced-white",
        backgroundColor: "$primary",
        // _hover: {
        //   bg: "primary-light",
        // },
      },
      secondary: {
        backgroundColor: "$accent",
        color: "$surfaceColor",
        stroke: "$primary-button-text-forced-white",
        "&:hover": {
          backgroundColor: "$accent",
        },
      },
      stroke: {
        color: "$primary-body-text",
        border: "1px solid ",
        borderColor: "$secondary-body-text",
        stroke: "$primary-body-text",
        // _hover: {
        //   bg: "secondary",
        //   border: "1px solid",
        //   borderColor: "primary-body-text",
        // },
      },
      ghost: {
        backgroundColor: "none",
        color: "$secondary-body-text",
        stroke: "$secondary-body-text",
        // _hover: {
        //   bg: "secondary",
        //   color: "primary-body-text",
        //   stroke: "primary-body-text",
        // },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "secondary",
  },
});
