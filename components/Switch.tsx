import * as RadixSwitch from "@radix-ui/react-switch";
import { styled } from "../stitches.config";

const SwitchRoot = styled(RadixSwitch.Root, {
  all: "unset",
  backgroundColor: "$border",
  position: "relative",
  // boxShadow: `0 2px 10px`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  // "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: "$primary-light" },

  variants: {
    type: {
      circle: {
        borderRadius: "9999px",
      },
      rounded: {
        borderRadius: "12x",
      },
      square: {
        borderRadius: 0,
      },
    },
    size: {
      "2xs": {
        width: 32,
        height: 16,
      },
      xs: {
        width: 44,
        height: 24,
      },
      sm: {
        width: 60,
        height: 32,
      },
    },
  },
  defaultVariants: {
    size: "xs",
    type: "circle",
  },
});

const SwitchThumb = styled(RadixSwitch.Thumb, {
  display: "block",
  backgroundColor: "white",
  borderRadius: "9999px",
  // boxShadow:' 0px 0px 1px 0px rgba(0, 0, 0, 0.4),0px 6px 6px -6px rgba(0, 0, 0, 0.16)',

  transition: "transform 100ms",
  transform: "translateX(3px)",
  willChange: "transform",
  variants: {
    size: {
      "2xs": {
        width: 12,
        height: 12,
        '&[data-state="checked"]': { transform: "translateX(17px)" },
      },
      xs: {
        width: 16,
        height: 16,
        '&[data-state="checked"]': { transform: "translateX(25px)" },
      },
      sm: {
        width: 24,
        height: 24,
        '&[data-state="checked"]': { transform: "translateX(33px)" },
      },
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

type SizeVariant = "2xs" | "xs" | "sm";
interface SwitchProps {
  size?: SizeVariant;
}

export function Switch({ size = "xs" }: SwitchProps) {
  return (
    <SwitchRoot size={size}>
      <SwitchThumb size={size} />
    </SwitchRoot>
  );
}
