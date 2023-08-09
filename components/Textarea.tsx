import { styled } from "../stitches.config";

const SubTextarea = styled("textarea", {
  position: "absolute",
  paddingTop: "12px",
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
  border: "1px solid blue",
  pointerEvent: "none",
  fontSize: "$md",
  //   border: "1px solid red",
});

const TextareaWrap = styled("div", {
  position: "relative",
  //   width: "200px",
  //   height: "200px",
  //   border: "1px solid green",
  [`& ${SubTextarea}:focus + ${PlaceholderText}`]: {
    transition: "transform 0.3s",
    transform: "scale(0.7) translate(-2px,-2px)",
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
