"use client";
import React from "react";
import {
  Sidebar,
  MenuLink,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/src";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const links = [
  { icon: <MagnifyingGlassIcon />, label: "home", route: "/" },
  { icon: <MagnifyingGlassIcon />, label: "about", route: "/sidebar" },
  { icon: <MagnifyingGlassIcon />, label: "main", route: "/button" },
];
function SidebarPage() {
  return (
    <div>
      <Sidebar links={links}>
        {/* <MenuLink href="/">hello 1</MenuLink>
        <MenuLink href="/sidebar">hello 2</MenuLink>
        <MenuLink href="/sidebar">hello 3</MenuLink>
        <Accordion type="multiple" className="sidebarAccordion">
          <AccordionItem value="1" content="outside">
            <AccordionTrigger>The first page</AccordionTrigger>
            <AccordionContent>
              <MenuLink href="/sidebar">acc 1 link 1</MenuLink>
              <MenuLink href="/sidebar">acc 1 link 2</MenuLink>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" content="outside">
            <AccordionTrigger>The first page</AccordionTrigger>
            <AccordionContent>
              <MenuLink href="/sidebar">acc 1 link 1</MenuLink>
              <MenuLink href="/sidebar">acc 1 link 2</MenuLink>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
      </Sidebar>
    </div>
  );
}

export default SidebarPage;
