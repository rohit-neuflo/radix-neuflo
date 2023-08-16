import { styled } from "../stitches.config";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

const SlideImage = styled("img", {
  width: "400px",
  height: "300px",
  objectFit: "cover",
});

const StyledSlider = styled("div", {
  height: "100%",
  width: "100%",
  // borderBottom: "1px solid green",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

interface Slide {
  image: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <ChevronLeftIcon
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          fontSize: "2rem",
        }}
        onClick={prevSlide}
      />
      {slides.map((slide, index, slides) => {
        const prevSlide = index > 0 ? slides[index - 1] : null;
        const nextSlide = index < slides.length - 1 ? slides[index + 1] : null;
        return (
          <div key={index} style={{ position: "absolute" }}>
            <AnimatePresence>
              {index === current && (
                <motion.div
                  key={index}
                  // style={{ position: "absolute" }}
                  initial={{ x: 400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <SlideImage
                    // style={{position:"absolute",}}
                    src={slide.image}
                    alt=""
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      <ChevronRightIcon
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          fontSize: "2rem",
        }}
        onClick={nextSlide}
      />
    </StyledSlider>
  );
};

export { Carousel };
