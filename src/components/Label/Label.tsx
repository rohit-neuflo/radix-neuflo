import * as RadixLabel from "@radix-ui/react-label";
import { styled } from "@/stitches.config";

const Label = styled(RadixLabel.Root, {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "white",
  width: "fit-content",
  backgroundColor: "$primary-body-text",
  fontFamily: "Poppins",
  lineHeight: "16px",
  variants: {
    type: {
      normal: {
        borderRadius: "4px",
      },
      rounded: {
        borderRadius: "34px",
      },
    },
    size: {
      "2xs": {
        fontWeight: "500",
        fontSize: "$2xs",
        padding: "0px 8px 0px 8px",
        letterSpacing: "1px",
      },
      xs: {
        fontWeight: "400",
        fontSize: "$xs",
        padding: "4px 8px 4px 8px",
        letterSpacing: "0.5px",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "xs",
    type: "normal",
    uppercase: "false",
  },
});

export { Label };
