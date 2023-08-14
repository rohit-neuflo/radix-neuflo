import { styled, keyframes } from "../stitches.config";
import * as RadixAccordion from "@radix-ui/react-accordion";
import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const slideDown = keyframes({
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
});
  
const slideUp = keyframes({
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
});

const StyledChevron = styled(ChevronDownIcon, {
    height: "1rem",
    width: "1rem",
    color: "$secondary-body-text",
    transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    transform: "rotate(-90deg)",
    "[data-state=open] &": { transform: "rotate(0)" },
});
  
const StyledHeader = styled(RadixAccordion.Header, {
    all: "unset",
    display: "flex",
});
  
const StyledTrigger = styled(RadixAccordion.Trigger, {
    all: "unset",
    fontFamily: "inherit",
    backgroundColor: "$surfaceColor",
    height: "24px",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "$md",
    lineHeight: "24px",
    borderBottom: "1px solid $border",
});

const StyledContent = styled(RadixAccordion.Content, {
    overflow: "hidden",
    fontSize: "$md",
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
});

const StyledContentBody = styled("div", {
    display: "flex",
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  React.ComponentPropsWithoutRef<typeof StyledTrigger>
>(({ className, children, ...props }, ref) => (
  <StyledHeader>
    <StyledTrigger ref={ref} {...props}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
AccordionTrigger.displayName = RadixAccordion.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  React.ComponentPropsWithoutRef<typeof StyledContent>
>(({ className, children, ...props }, ref) => (
  <StyledContent ref={ref} {...props}>
    <StyledContentBody>{children}</StyledContentBody>
  </StyledContent>
));
AccordionContent.displayName = RadixAccordion.Content.displayName;

const AccordionItem = styled(RadixAccordion.Item, {
  overflow: "hidden",
  marginTop: 1,
  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },

  "&:last-child": {
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
  },

  variants: {
    content: {
      inside: {
        [`& ${StyledContent}`]: {
          backgroundColor: "$surfaceColor",
        },
      },
      outside: {
        [`& ${StyledContent}`]: {
          backgroundColor: "transparent",
        },
      },
    },
  },

  defaultVariants: {
    content: "inside",
  },
});

const Accordion = styled(RadixAccordion.Root, {
    borderRadius: "8px",
    width: "100%",
    fontFamily: "Poppins",
    variants: {
      size: {
        sm: {
          [`& ${StyledTrigger}, ${StyledContentBody}`]: {
            padding: "4px",
          },
        },
        md: {
          [`& ${StyledTrigger}, ${StyledContentBody}`]: {
            padding: "8px",
          },
        },
        lg: {
          [`& ${StyledTrigger}, ${StyledContentBody}`]: {
            padding: "12px",
          },
        },
        xl: {
          [`& ${StyledTrigger}, ${StyledContentBody}`]: {
            padding: "16px",
          },
        },
      },
    },
  
    defaultVariants: {
      size: "lg",
    },
  });

export { 
    Accordion, 
    AccordionItem, 
    AccordionTrigger, 
    AccordionContent 
};
