import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
type CustomCarouselProps = {
  items: React.ReactNode[];
  perPage?: 1 | 2 | 3 | 4 | 5 | 6;
  padding?: "2xs" | "xs" | "sm" | "md" | "lg";
  variant?: "circle" | "rounded";
} & React.HTMLProps<HTMLDivElement>;

const StyledButton = styled("button", {
  background: "$surfaceColor",
  height: "2rem",
  width: "2rem",
  boxShadow: "$boxShadow$sm",
  opacity: "0.8",
  transition: "opacity 150ms",
  "&:hover:not(:disabled)": {
    opacity: "1",
  },
  variants: {
    variant: {
      circle: {
        borderRadius: "9999px",
      },
      rounded: {
        borderRadius: "8px",
      },
    },
  },
});

const PaginationContainer = styled("ul", {
  bottom: "-1.5rem",
  [`& .splide__pagination__page`]: {
    backgroundColor: "$border",
    transition:
      "background-color 150ms, opacity 150ms, transform 250ms ease-in-out",
    opacity: "1",
    "&:hover": {
      backgroundColor: "$primary",
      opacity: "0.7",
    },
  },
  [`& .splide__pagination__page.is-active`]: {
    backgroundColor: "$primary",
    opacity: "1",
  },
});

const SplideSlide2 = styled(SplideSlide, {
  ["&.is-active"]: {
    // border: "1px solid red",
  },
});

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  items,
  perPage,
  padding,
  variant = "circle",
  style,
  ...rest
}) => {
  const paddingValues = {
    "2xs": "8px",
    xs: "12px",
    sm: "16px",
    md: "24px",
    lg: "32px",
  };

  const defaultOptions = {
    type: "loop",
    perPage: perPage ? perPage : 1,
    focus: 0,
    gap: padding ? paddingValues[padding] : "1.5rem",
    padding: "1rem",
    breakPoints: {
      768: {
        perPage: 2,
        gap: "0.5rem",
      },
      576: {
        perPage: 1,
        gap: "0.5rem",
      },
    },
  };

  const carouselOptions = { ...defaultOptions };
  const style1 = { ...style, height: "100%", marginTop: "1rem" };

  return (
    <div style={style1}>
      <Splide hasTrack={false} options={carouselOptions}>
        <SplideTrack>
          {items.map((item, index) => (
            <SplideSlide2 key={index}>{item}</SplideSlide2>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <StyledButton
            variant={variant}
            className="splide__arrow splide__arrow--prev"
          >
            <ChevronRightIcon />
          </StyledButton>
          <StyledButton
            variant={variant}
            className="splide__arrow splide__arrow--next"
          >
            <ChevronRightIcon />
          </StyledButton>
          <PaginationContainer
            className="splide__pagination splide__pagination--ltr"
            role="tablist"
            aria-label="Select a slide to show"
          ></PaginationContainer>
        </div>
      </Splide>
    </div>
  );
};

export default CustomCarousel;
