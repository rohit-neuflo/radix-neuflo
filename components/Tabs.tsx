import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { styled, keyframes } from "../stitches.config";
import { motion } from "framer-motion";

const activate = keyframes({
  "0%": { transform: "scale(0.2)" },
  "100%": { transform: "scale(1)" },
});

export const TabsList = styled(RadixTabs.List, {
  flexShrink: 0,
  width: "fit-content",
  display: "flex",
  gap: "2px",
  "&:first-child": {
    borderRadius: "8px 0px 0px 8px",
  },
  "&:last-child": {
    borderRadius: "0px 8px 8px 0px",
  },
});

export const TabItem = styled(RadixTabs.Trigger, {
  flexShrink: 0,
  all: "unset",
  position: "relative",
  width: "fit-content",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  // "&:hover": {
  //   backgroundColor: "rgba(71, 170, 212, 0.0627)",
  //   color: "#47AAD4",
  // },
});

// const TabIndicator = styled(motion.div, {
//   position: "absolute",
//   inset: 0,
//   borderRadius: "16px",
//   backgroundColor: "$purple",
// });

// export const TabItem = React.forwardRef<
//   React.ElementRef<typeof TabTrigger>,
//   React.ComponentPropsWithoutRef<typeof TabTrigger>
// >((props, ref) => {
//   const { value, tabIndex, children, ...restProps } = props;
//   const [isActive, setIsActive] = React.useState<number | undefined>(tabIndex);

//   const handleTabClick = () => {
//     setIsActive(0);
//   };
//   return (
//     <div style={{ position: "relative" }}>
//       <TabTrigger
//         value={value}
//         ref={ref}
//         {...restProps}
//         onClick={handleTabClick}
//       >
//         {isActive === 0 && (
//           <TabIndicator
//             layoutId={`active-pill-${value}`}
//             transition={{ duration: 0.5 }}
//           />
//         )}
//         {children}
//       </TabTrigger>
//     </div>
//   );
// });

export const TabContent = styled(RadixTabs.Content, {
  flexGrow: 1,
  padding: "20px",
  backgroundColor: "white",
  outline: "none",
});

export const Tabs = styled(RadixTabs.Root, {
  display: "flex",
  flexDirection: "column",
  padding: "none",
  width: "fit-content",
  fontFamily: "Poppins",
  variants: {
    variant: {
      default: {
        [`& ${TabItem}`]: {
          backgroundColor: "$surfaceColor",
          '&[data-state="active"]': {
            "&:after": {
              content: "",
              position: "absolute",
              bottom: 0,
              height: "2px",
              width: "100%",
              backgroundColor: "$purple",
              borderRadius: "8px 8px 0px 0px",
              animation: `${activate} 200ms ease-in-out`,
            },
            backgroundColor: "#FFFFFF03",
            color: "#47AAD4",
          },
          "&:hover": {
            borderRadius: "8px",
            backgroundColor: "rgba(71, 170, 212, 0.0627)",
            color: "#47AAD4",
          },
        },
      },
      pills: {
        [`& ${TabItem}`]: {
          '&[data-state="active"]': {
            backgroundColor: "$primary",
            color: "white",
            borderRadius: "8px",
          },
          '&[data-state="inactive"]': {
            "&:hover": {
              borderRadius: "8px",
              backgroundColor: "rgba(71, 170, 212, 0.0627)",
              color: "#47AAD4",
            },
          },
        },
      },
      segments: {
        [`& ${TabsList}`]: {
          backgroundColor: "$border",
          borderRadius: "8px",
          padding: "4px",
        },
        [`& ${TabItem}`]: {
          '&[data-state="active"]': {
            backgroundColor: "$surfaceColor",
            color: "$primary-body-text",
            borderRadius: "8px",
            boxShadow:
              "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 6px 6px -6px rgba(0, 0, 0, 0.16)",
          },
          '&[data-state="inactive"]': {
            backgroundColor: "$border",
          },
        },
      },
    },
    size: {
      sm: {
        [`& ${TabItem}`]: {
          fontSize: "$sm",
          padding: "0.25rem 0.5rem 0.25rem 0.5rem",
          lineHeight: "1.5rem",
          gap: "0.25rem",
        },
      },
      md: {
        [`& ${TabItem}`]: {
          fontSize: "$sm",
          padding: "0.5rem 0.75rem 0.5rem 0.75rem",
          lineHeight: "1.5rem",
          gap: "0.5rem",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});
