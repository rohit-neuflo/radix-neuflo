"use client";
import React from "react";
import {
  Checkbox,
  MultiSelect,
  Tabs,
  TabsList,
  TabItem,
  TabContent,
} from "@/src";

function MultiselectPage() {
  return (
    <MultiSelect>
      <Tabs>
        <TabsList>
          <TabItem value="fruits">Fruits</TabItem>
          <TabItem value="vegetables">Vegetables</TabItem>
        </TabsList>
        <TabContent value="fruits">
          <Checkbox id="apple" label="Apple" />
          <Checkbox id="banana" label="Banana" />
          <Checkbox id="orange" label="Orange" />
          {/* Add more checkboxes for fruits */}
        </TabContent>
        <TabContent value="vegetables">
          <Checkbox id="carrot" label="Carrot" />
          <Checkbox id="broccoli" label="Broccoli" />
          <Checkbox id="spinach" label="Spinach" />
          {/* Add more checkboxes for vegetables */}
        </TabContent>
      </Tabs>
    </MultiSelect>
  );
}

export default MultiselectPage;
