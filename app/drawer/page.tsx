"use client";
import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  Button,
  Input,
} from "@/src";

function DrawerPage() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>open drawer</Button>
        </DrawerTrigger>
        <DrawerContainer>
          <DrawerHeader title="Title" />
          <DrawerContent>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              <Input type="text" placeholder="Enter your Name" />
              <Input type="number" placeholder="Number Input" />
            </form>
          </DrawerContent>
          <DrawerFooter
            size="md"
            variant="buttonLeftRight"
            leftButtons={[
              <Button variant="ghost" size="md">
                Label
              </Button>,
            ]}
            rightButtons={[
              <Button variant="stroke" size="md">
                Label
              </Button>,
              <Button variant="primary" size="md">
                Label
              </Button>,
            ]}
            divider
          />
        </DrawerContainer>
      </Drawer>
    </div>
  );
}

export default DrawerPage;
