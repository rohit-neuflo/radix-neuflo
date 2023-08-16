import { styled } from "../stitches.config";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const SlideImage = styled("img",{
    width: "400px",
    height: "300px",
objectFit: "cover",
})

const StyledSlider = styled("div",{
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

})

const Carousel = ({ slides }) => {
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
          className="left-arrow"
          onClick={prevSlide}
        />
        <ChevronRightIcon
          className="right-arrow"
          onClick={nextSlide}
        />
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <SlideImage src={slide.image} alt="" />
              )}
            </div>
          );
        })}
      </StyledSlider>
    );
  };
  

export {Carousel}