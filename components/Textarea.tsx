import { styled } from "../stitches.config";

const SubTextarea = styled("textarea", {
  position: "absolute",
  paddingTop: "1.5rem",
  fontSize: "$md",
  borderRadius: "8px",
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
  position: "relative",
  [`& ${SubTextarea}:focus + ${PlaceholderText}`]: {
    transition: "transform 0.3s",
    transform: "scale(0.75) translate(-20px,-2px)",
    pointerEvent: "none",
  },
  [`& ${SubTextarea}:not(:focus) ~ ${PlaceholderText}`]: {
    transition: "transform 0.3s",
    transform: "scale(1) translate(2px,2px)",
    // transform: "scale(0.8) translate(-5px,-5px)",
    pointerEvent: "none",
  },
});

interface TextareaProps {
  placeholdertext: string;
}

function Textarea({ placeholdertext }: TextareaProps) {
  return (
    <TextareaWrap>
      <SubTextarea />
      <PlaceholderText>{placeholdertext}</PlaceholderText>
    </TextareaWrap>
  );
}

export { Textarea };
