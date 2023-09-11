"use client";
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { HomeIcon } from "@radix-ui/react-icons";

const links = [
  { icon: <HomeIcon />, label: "Home", route: "/dashboard" },
  // {icon: ,label:"2", route:"/dasboard/"}
  // {icon: ,label:"3", route:""}
  // {icon: ,label:"4", route:""}
  // {icon: ,label:"5", route:""}
];

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Sidebar links={links}></Sidebar>
      <div style={{ padding: "2.5rem 2rem" }}>{children}</div>
    </div>
  );
}

export default Dashboard;
