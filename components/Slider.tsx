import { styled, keyframes } from "../stitches.config";
import * as Slider from "@radix-ui/react-slider";
import React from "react";
export const SliderRoot = styled(Slider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: 200,
  height: 20,
});

export const SliderTrack = styled(Slider.Track, {
  backgroundColor: "$primary-light",
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",
  height: 3,
});

export const SliderRange = styled(Slider.Range, {
  position: "absolute",
  backgroundColor: "$accent",
  borderRadius: "9999px",
  height: "100%",
});

export const SliderThumb = styled(Slider.Thumb, {
  border: "1px solid red",
//   zIndex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "32px",
  width: "32px",
  padding: "4px",
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "white",
//   backgroundImage:'url(thumbSVG)',
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

const ThumbSVG = styled("svg", {
  position:'absolute',
  background: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M16.5 5.25L16.5 18M7.5 5.25L7.5 18M12 5.25L12 18' stroke='%23999CA0' stroke-linecap='round'/%3E%3C/svg%3E")`,
});

export function Thumb(){
    return(
        <SliderThumb>
           {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
    <path d="M16.5 5.25L16.5 18M7.5 5.25L7.5 18M12 5.25L12 18" stroke="%23999CA0" stroke-linecap="round" />
  </svg> */}
        <ThumbSVG/>
        </SliderThumb>
    )
}
