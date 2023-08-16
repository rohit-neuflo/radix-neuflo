"use client";
import { Tabs, TabsList, TabItem, TabContent } from "../../components/Tabs";
import { Lightbulb } from "@phosphor-icons/react";

import React from "react";

function TabsPage() {
  return (
    <div>
      <Tabs defaultValue="1" variant="segments">
        <TabsList>
          <TabItem value="1">
            <Lightbulb />
            $link
            <Lightbulb />
          </TabItem>
          <TabItem value="2">
            <Lightbulb />
            $link
          </TabItem>
          <TabItem value="3">
            <Lightbulb />
            $link
          </TabItem>
          <TabItem value="4">
            <Lightbulb />
            $link
          </TabItem>
        </TabsList>
        <TabContent value="1">content 1</TabContent>
        <TabContent value="2">content 2</TabContent>
        <TabContent value="3">content 3</TabContent>
        <TabContent value="4">content 4</TabContent>
      </Tabs>
      
      <Tabs defaultValue="1" size="sm">
        <TabsList>
          <TabItem value="1" >
            <Lightbulb />
            $link
          </TabItem>
          <TabItem value="2" >
            {/* <Lightbulb /> */}
            $link
            {/* <Lightbulb /> */}
          </TabItem>
        </TabsList>
        <TabContent value="1">content 1</TabContent>
        <TabContent value="2">content 2</TabContent>
      </Tabs>
    </div>
  );
}

export default TabsPage;
