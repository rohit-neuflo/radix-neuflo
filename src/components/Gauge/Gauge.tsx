import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { styled } from "@stitches/react";

type GaugeProps = {
  value: number;
  size?: "2xs" | "xs" | "sm" | "md" | "lg";
};

const GaugeContainer = styled("div", {
  variants: {
    size: {
      "2xs": {
        width: "16px",
      },
      xs: {
        width: "24px",
      },
      sm: {
        width: "32px",
      },
      md: {
        width: "40px",
      },
      lg: {
        width: "48px",
      },
    },
  },
});

const Gauge: React.FC<GaugeProps> = ({ value, size = "sm" }) => {
  const strokeWidth =
    size === "2xs"
      ? 10
      : size === "xs"
      ? 9
      : size === "sm"
      ? 8
      : size === "md"
      ? 9
      : 10;

  return (
    <GaugeContainer size={size}>
      <CircularProgressbar
        value={value}
        strokeWidth={strokeWidth}
        styles={buildStyles({
          pathColor: "rgb(56.8, 136, 169.6)",
        })}
      />
    </GaugeContainer>
  );
};

export { Gauge };
