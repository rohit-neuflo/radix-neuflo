"use client";
import { Separation, Tabs, TabsList, TabItem, TabContent } from "@/src";
import React from "react";
import AccordionPart from "./AccordionPart";
import CarouselDemo from "./CarouselDemo";
import Form from "./Form";
import ProgressDemo from "./ProgressDemo";
function DashboardHome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <span>Neuflo Design System</span>
      <Tabs defaultValue="1">
        <TabsList>
          <TabItem value="1">Accordion</TabItem>
          <TabItem value="2">Form</TabItem>
          <TabItem value="3">Carousel</TabItem>
          <TabItem value="4">Progress</TabItem>
        </TabsList>
        <Separation />
        <TabContent value="1">
          <AccordionPart />
        </TabContent>
        <TabContent value="2">
          <Form />
        </TabContent>
        <TabContent value="3">
          <CarouselDemo />
        </TabContent>
        <TabContent value="4">
          <ProgressDemo />
        </TabContent>
      </Tabs>
    </div>
  );
}

export default DashboardHome;
