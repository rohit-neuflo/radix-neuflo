import * as React from "react";

import { styled, keyframes } from "@/stitches.config";
import * as RadixSlider from "@radix-ui/react-slider";

const SliderRoot = styled(RadixSlider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "280px",
  height: "32px",
});

const SliderThumb = styled(RadixSlider.Thumb, {
  border: "2px solid",
  borderColor: "$background",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "24px",
  width: "24px",
  padding: "4px",
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "white",
  backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M16.5 5.25L16.5 18M7.5 5.25L7.5 18M12 5.25L12 18' stroke='%23999CA0' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  "&:focus": {
    outline: "none",
  },
});

interface SliderProps {
  doubleThumbs?: boolean;
  step?: number;
  defaultValue?: number[];
  minStepsBetweenThumbs?: number;
  max?: number;
}

export function Slider({
  doubleThumbs = false,
  step = 1,
  defaultValue = [0, 100],
  minStepsBetweenThumbs,
  max = 100,
}: SliderProps) {
  const SliderTrack = styled(RadixSlider.Track, {
    backgroundColor: "$border",
    position: "relative",
    flexGrow: 1,
    borderRadius: "9999px",
    height: 3,
  });

  const width = 280;
  const SliderRange = styled(RadixSlider.Range, {
    position: "absolute",
    backgroundColor: "$primary-light",
    // background: `repeating-linear-gradient(
    //   to right,
    //   transparent 32px,
    //   lightpink 32px,
    //   lightpink calc(32px + 56px),
    //   white calc(32px + 56px),
    //   white calc(32px + 56px + 5px),
    //   transparent calc(32px + 56px + 5px)
    // )`,
    borderRadius: "9999px",
    height: "100%",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "2px",
      height: "12px",
      background: "red", // Customize marker color
      zIndex: 1, // Place above the track
    },
  });
  const numberOfSteps: number = Math.floor((max - defaultValue[0]) / step) + 1;
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <SliderRoot
        max={max}
        step={step}
        defaultValue={defaultValue}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
      >
        <SliderTrack>
          {Array.from({ length: numberOfSteps }).map((_, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: `${(index * 100) / (numberOfSteps - 1)}%`,
                width: "4px",
                height: "100%",
                // transform: "translate(-25%,-25%)",
                // borderRadius: "9999px",
                // border:'1px solid black',
                backgroundColor: "white",
                zIndex: 1,
              }}
            />
          ))}
          <SliderRange />
        </SliderTrack>
        {/* {doubleThumbs && <SliderThumb />}
        <SliderThumb /> */}
      </SliderRoot>
    </div>
  );
}
