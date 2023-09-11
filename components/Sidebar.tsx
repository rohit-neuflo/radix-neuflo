import React from "react";
import { styled, keyframes } from "../stitches.config";
import {
  Drawer,
  DrawerTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from "./Drawer";

import { MenuLink } from "./MenuItem";
import { Button } from "./Button";
import { Header } from "./Header";
import { Label } from "./Label";
import { Footer } from "./Footer";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

const SidebarContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "8px",
  alignSelf: "stretch",
  [`& a`]: {
    "&:hover": {
      backgroundColor: "$secondary",
    },
  },
});

const SidebarContainer = styled("div", {
  backgroundColor: "$background",
  width: "316px",
  height: "100vh",
  boxShadow: "$boxShadow$sm",
  padding: "1rem 32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  boxSizing: "border-box",
  variants: {
    display: {
      block: {
        display: "block",
      },
      none: {
        display: "none",
      },
    },
  },
});

const SideDrawerContainer = styled("div", {
  backgroundColor: "$background",
  boxShadow: "$boxShadow$sm",
  width: "50px",
  height: "100vh",
  padding: "1rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "16px",
  boxSizing: "border-box",
  [`& a`]: {
    "&:hover": {
      backgroundColor: "$secondary",
    },
  },
  variants: {
    display: {
      block: {
        display: "block",
      },
      none: {
        display: "none",
      },
    },
  },
});

const IconWrapper = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "0.25rem",
});

type Link = {
  icon?: React.ReactNode;
  label: string;
  route: string;
};

type SidebarProps = {
  links?: Link[];
} & React.HTMLProps<HTMLDivElement>;

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translateX(-100%)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const contentHide = keyframes({
  "0%": { opacity: 1, transform: "translateX(0)" },
  "100%": { opacity: 0, transform: "translateX(-100%)" },
});

const Sidebar = ({ children, links, ...rest }: SidebarProps) => {
  return (
    <>
      <SidebarContainer
        {...rest}
        display={{
          "@xs": "none",
          "@sm": "none",
          "@md": "block",
          "@lg": "block",
          "@xl": "block",
        }}
      >
        <Header title="Neuflo"></Header>
        <SidebarContent>
          {links ? (
            links.map((link, index) => (
              <MenuLink key={index} href={link.route}>
                {link.icon && <IconWrapper>{link.icon}</IconWrapper>}
                <span>{link.label}</span>
              </MenuLink>
            ))
          ) : (
            <>{children}</>
          )}
        </SidebarContent>
      </SidebarContainer>
      <SideDrawerContainer
        display={{
          "@md": "none",
          "@lg": "none",
          "@xl": "none",
          "@xs": "block",
          "@sm": "block",
        }}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button style={{ marginLeft: "2.5rem" }} size="xs">
              <ChevronRightIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContainer
            css={{
              backgroundColor: "$background",
              left: "0",
              '&[data-state="open"]': {
                animation: `${contentShow} 300ms ease-in-out`,
              },
              '&[data-state="closed"]': {
                animation: `${contentHide} 300ms ease-in-out`,
              },
              "@xs": { display: "block" },
              "@sm": { display: "block" },
              "@md": { display: "none" },
              "@lg": { display: "none" },
              "@xl": { display: "none" },
            }}
          >
            <DrawerContent
              css={{
                height: "100%",
                backgroundColor: "$background",
                [`& a`]: {
                  "&:hover": {
                    backgroundColor: "$secondary",
                  },
                },
              }}
            >
              <DrawerTrigger asChild>
                <Button style={{ marginLeft: "360px" }} size="xs">
                  <ChevronLeftIcon />
                </Button>
              </DrawerTrigger>
              <Header title="Neuflo"></Header>
              {links ? (
                links.map((link, index) => (
                  <MenuLink key={index} href={link.route}>
                    {link.icon && <IconWrapper>{link.icon}</IconWrapper>}
                    <span>{link.label}</span>
                  </MenuLink>
                ))
              ) : (
                <>{children}</>
              )}
            </DrawerContent>
          </DrawerContainer>
        </Drawer>
        {links ? (
          links.map((link, index) => (
            <MenuLink key={index} href={link.route}>
              {link.icon && <IconWrapper>{link.icon}</IconWrapper>}
            </MenuLink>
          ))
        ) : (
          <>{children}</>
        )}
      </SideDrawerContainer>
    </>
  );
};

export { Sidebar };
