import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@/stitches.config";
import React from "react";
import { Bell, CaretLeft, X } from "@phosphor-icons/react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

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
  right: "0",
  width: "400px",
  height: "100vh",
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

const DrawerContainer = React.forwardRef<
  React.ElementRef<typeof RadixDrawerContainer>,
  React.ComponentPropsWithoutRef<typeof RadixDrawerContainer>
>(({ children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <RadixDrawerContainer ref={ref} {...props}>
      {children}
    </RadixDrawerContainer>
  </DrawerPortal>
));

DrawerContainer.displayName = RadixDrawerContainer.displayName;

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

const DrawerFooter = styled(Footer);

export {
  Drawer,
  DrawerTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
};
