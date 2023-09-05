import { styled } from "../stitches.config";
import React, { HTMLProps } from "react";

const SubTextarea = styled("textarea", {
  fontFamily: "Poppins",
  position: "absolute",
  padding: "1.5rem 5px",
  fontSize: "$md",
  border: "1px solid $border",
  borderRadius: "8px",
  "&:hover": {
    border: "2px solid $primary",
  },
});

const PlaceholderText = styled("span", {
  color: "$secondary-body-text",
  fontFamily: "Poppins",
  position: "absolute",
  top: "5px",
  left: "5px",
  zIndex: 1,
  pointerEvent: "none",
  fontSize: "$md",
});

const TextareaWrap = styled("div", {
  fontFamily: "Poppins",
  display: "inline-block",
  position: "relative",
  border: "1px solid red",
  [`& ${SubTextarea}:focus + ${PlaceholderText}`]: {
    transition: "transform 0.3s",
    transform: "scale(0.75) translate(-18px,-2px)",
    pointerEvent: "none",
  },
  [`& ${SubTextarea}:not(:focus) ~ ${PlaceholderText}`]: {
    transition: "transform 0.3s",
    transform: "scale(1) translate(2px,2px)",
    // transform: "scale(0.8) translate(-5px,-5px)",
    pointerEvent: "none",
  },
});

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholdertext: string;
}

function Textarea({ placeholdertext }: TextareaProps) {
  return (
    <TextareaWrap>
      <SubTextarea style={{ resize: "none" }} />
      <PlaceholderText>{placeholdertext}</PlaceholderText>
    </TextareaWrap>
  );
}

export { Textarea };
