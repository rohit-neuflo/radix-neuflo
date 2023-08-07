"use client";
import React from "react";
import {
  SliderRange,
  SliderRoot,
  SliderTrack,
  SliderThumb,
  Thumb
} from "@/components/Slider";

export default function SliderPage() {
  return (
    <form style={{
        margin:"20px"
    }}>
      <SliderRoot defaultValue={[25, 75]} step={10} minStepsBetweenThumbs={2}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {/* <SliderThumb /> */}
        {/* <SliderThumb /> */}
        <Thumb/>
        <Thumb/>
      </SliderRoot>
     </form>
  );
}
