import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { styled } from "../stitches.config";
import { TextLabel } from "./Checkbox";

const RadioGroup = styled(RadixRadioGroup.Root, {
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const RadioGroupItem = styled(RadixRadioGroup.Item, {
  all: "unset",
  backgroundColor: "white",
  width: "16px",
  height: "16px",
  border: "1px solid $secondary-body-text",
  borderRadius: "100%",
  "&[data-state=checked]": {
    // border: "1px solid $primary-light",
    border: "1px solid $primary",
  },
  "&:hover": {
    "&[data-state=unchecked]": {
      background: "$secondary",
      boxShadow: " 0px 0px 0px 4px $colors$secondary",
    },
    "&[data-state=checked]": {
      layerBackgroundColor: "$surfaceColor",
      backgroundColor: "rgba(71, 170, 212, 0.1)",
      boxShadow: " 0px 0px 0px 4px rgba(71, 170, 212, 0.1)",
    },
  },
});

const RadioGroupIndicator = styled(RadixRadioGroup.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: "60%",
    height: "60%",
    borderRadius: "50%",
    background: "$primary",
  },
});

interface RadioProps {
  id?: string;
  value: string;
  labelSide?: "left" | "right";
  label: string;
}
const Radio = ({ id, value, labelSide = "right", label }: RadioProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}
  >
    {labelSide === "left" && <TextLabel htmlFor={id}>{label}</TextLabel>}
    <RadioGroupItem value={value} id={id}>
      <RadioGroupIndicator />
    </RadioGroupItem>
    {labelSide === "right" && <TextLabel htmlFor={id}>{label}</TextLabel>}
  </div>
);

export { RadioGroup, Radio };
