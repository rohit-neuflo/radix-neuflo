import * as RadixSwitch from "@radix-ui/react-switch";
import { styled } from "../stitches.config";

const SwitchRoot = styled(RadixSwitch.Root, {
  all: "unset",
  backgroundColor: "$border",
  position: "relative",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  '&[data-state="checked"]': { backgroundColor: "$primary-light" },
  variants: {
    type: {
      circle: {
        borderRadius: "9999px",
      },
      rounded: {
        borderRadius: 12,
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
  filter:
    "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.40)) drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.16))",
  transition: "transform 100ms",
  '&[data-state="unchecked"]': {
    transition: "transform 250ms",
  },
  variants: {
    type: {
      circle: {
        borderRadius: "9999px",
      },
      rounded: {
        borderRadius: 12,
      },
      square: {
        borderRadius: 0,
      },
    },
    size: {
      "2xs": {
        width: 12,
        height: 12,
        transform: "translateX(2px)",
        willChange: "transform",
        '&[data-state="checked"]': {
          transform: "translateX(18px)",
          transition: "transform 250ms",
        },
      },
      xs: {
        width: 16,
        height: 16,
        '&[data-state="checked"]': {
          transform: "translateX(24px)",
          transition: "transform 250ms",
        },
        transform: "translateX(4px)",
        willChange: "transform",
      },
      sm: {
        width: 24,
        height: 24,
        '&[data-state="checked"]': {
          transform: "translateX(32px)",
          transition: "transform 250ms",
        },
        transform: "translateX(4px)",
        willChange: "transform",
      },
    },
  },

  defaultVariants: {
    size: "xs",
    type: "circle",
  },
});

type SizeVariant = "2xs" | "xs" | "sm";
type TypeVariant = "circle" | "rounded" | "square";
interface SwitchProps {
  size?: SizeVariant;
  type?: TypeVariant;
}

export function Switch({ size = "xs", type = "circle" }: SwitchProps) {
  return (
    <SwitchRoot size={size} type={type}>
      <SwitchThumb size={size} type={type} />
    </SwitchRoot>
  );
}
