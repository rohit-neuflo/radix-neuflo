"use client";
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { HomeIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";
import { MenuLink } from "@/components/MenuItem";

const links = [
  { icon: <HomeIcon />, label: "Home", route: "/dashboard" },
  {
    icon: <PlusIcon />,
    label: "More Components",
    route: "/dashboard/components",
  },
  // {icon: ,label:"3", route:""}
  // {icon: ,label:"4", route:""}
  // {icon: ,label:"5", route:""}
];

function Dashboard({ children }: { children: React.ReactNode }) {
  const [activeLink, setActiveLink] = React.useState("/");

  const handleLinkClick = (routeName: string) => {
    setActiveLink(routeName);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        fontFamily: "Poppins",
        height: "100%",
      }}
    >
      <Sidebar
        headerTitle="neuflo"
        links={links}
        handleLinkClick={handleLinkClick}
      >
        <Accordion type="multiple" className="sidebarAccordion">
          <AccordionItem value="1" content="outside">
            <AccordionTrigger>Accordion Item 1</AccordionTrigger>
            <AccordionContent>
              <MenuLink
                href="/dashboard"
                onClick={() => handleLinkClick("/dashboard")}
              >
                Link 1
              </MenuLink>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
      <div
        style={{
          padding: "2.5rem 2rem",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          overflow: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Dashboard;
