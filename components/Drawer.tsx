import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "../stitches.config";
import React from "react";
import { Bell, CaretLeft, X } from "@phosphor-icons/react";
import { Header } from "./Header";
import { Footer } from "@/components/Footer";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// const overlayShow = keyframes({
//   "0%": { opacity: 0 },
//   "100%": { opacity: 1 },
// });

// const contentShow = keyframes({
//   "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
//   "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
// });
const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translateX(100%)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const contentHide = keyframes({
  "0%": { opacity: 1, transform: "translateX(0)" },
  "100%": { opacity: 0, transform: "translateX(100%)" },
});

const DrawerOverlayStyles = {
  backgroundColor: "black",
  opacity: 0.5,
  position: "fixed",
  inset: 0,
  //   animation: `${overlayShow} ease-in`,
};

const IconButton = styled(Dialog.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 24,
  width: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  "&:hover": { backgroundColor: "$border" },
  "&:focus": { boxShadow: `0 0 0 2px $border` },
});

const RadixDrawerContainerStyles = {
  fontFamily: "Poppins",
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "0",
  left: "70%",
  width: "30%",
  height: "100vh",
  //   animation: `${contentShow} 2s cubic-bezier(0.16, 1, 0.3, 1)`,
  '&[data-state="open"]': {
    animation: `${contentShow} 300ms ease-in-out`,
  },
  '&[data-state="closed"]': {
    animation: `${contentHide} 300ms ease-in-out`,
  },
  overflow: "none",
  display: "flex",
  flexDirection: "column",
  gap: "",

  "&:focus": { outline: "none" },
  // "& > *": {
  //   "&:not(:last-child)": {
  //     borderBottom: "1px solid $border", // Adjust the color as needed
  //   },
  // },
};

const DrawerContentStyles = {
  padding: "1.5rem",
};

const DrawerTitleStyle = {
  fontWeight: "600",
  fontSize: "$xl",
  margin: 0,
};

const DrawerPortal = styled(Dialog.Portal);
const DrawerOverlay = styled(Dialog.Overlay, DrawerOverlayStyles);
const RadixDrawerContainer = styled(Dialog.Content, RadixDrawerContainerStyles);
const DrawerTitle = styled(Dialog.Title, DrawerTitleStyle);

const DrawerContent = styled("div", DrawerContentStyles);
const DrawerClose = styled(Dialog.Close, {
  backgroundColor: "none",
  border: "none",
});
const DrawerTrigger = styled(Dialog.Trigger);
const Drawer = styled(Dialog.Root, {
  //   '&[data-state="open"]': {
  //     [`& ${DrawerPortal} ${RadixDrawerContainer}`]: {
  //       animation: `${contentShow} 400ms ease-in`,
  //     },
  //     '&[data-state="closed"]': {
  //       [`& ${DrawerPortal} ${RadixDrawerContainer}`]: {
  //         animation: `${contentHide} 400ms ease-out`,
  //       },
  //     },
  //   },
});

function DrawerContainer({ children }: { children: React.ReactNode }) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <RadixDrawerContainer>{children}</RadixDrawerContainer>
    </DrawerPortal>
  );
}

function DrawerHeader({ title }: { title?: string }) {
  function DialogClose() {
    return (
      <DrawerClose asChild>
        <X />
      </DrawerClose>
    );
  }
  return (
    <div
      style={{
        height: "4rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Header title={title} divider iconsRight={[{ Icon: DialogClose }]} />
      </div>
    </div>
  );
}

// function ModalFooter({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       style={{
//         minHeight: "4rem",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           minHeight: "50%",
//           justifyContent: "space-between",
//           flexGrow: 1,
//           padding: "0 1.5rem ",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

const DrawerFooter = styled(Footer);

export {
  Drawer,
  DrawerTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
};
