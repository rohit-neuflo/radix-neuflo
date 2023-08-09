import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import { styled } from "../stitches.config";

const ChipsGroup = styled(RadixToggleGroup.Root, {});

const Chip = styled(RadixToggleGroup.Item, {
  display: "inline-flex",
  height: "40px",
  padding: " 8px 12px",
  alignItems: "center",
  gap: "8px",
  width: "fit-content",
  backgroundColor: "$surfaceColor",
  fontFamily: "Poppins",
  borderRadius: "8px",
  border: "2px solid transparent",
  variants: {
    size: {
      sm: {
        height: "32px",
        padding: "4px 8px",
      },
      md: {
        height: "40px",
        padding: "8px 12px",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },

  "&:hover": {
    layerBackgroundColor: "$surfaceColor",
    backgroundColor: "rgba(71, 170, 212, 0.1)",
    color: "#47AAD4",
  },
  "&[data-state=on]": {
    backgroundColor: "rgba(71, 170, 212, 0.1)",
    color: "#47AAD4",
    border: "2px solid #47AAD4",
  },
});

export { ChipsGroup, Chip };
