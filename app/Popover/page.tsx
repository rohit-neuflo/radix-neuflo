"use client";
import React from "react";
import {
  Popover,
  PopoverContainer,
  PopoverHeader,
  PopoverTrigger,
  PopoverContent,
  PopoverFooter,
} from "@/components/Popover";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
function PopoverPage() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>open popover</Button>
        </PopoverTrigger>
        <PopoverContainer>
          <PopoverHeader title="Title" />
          <PopoverContent>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              <Input type="text" placeholder="Enter your name"/>
              <Input type="number" />
            </form>
          </PopoverContent>
          <PopoverFooter
            size="sm"
            variant="buttonLeftRight"
            leftButtons={[
              <Button variant="ghost" size="sm">
                Label
              </Button>,
            ]}
            rightButtons={[
              <Button variant="stroke" size="sm">
                Label
              </Button>,
              <Button variant="primary" size="sm">
                Label
              </Button>,
            ]}
            divider
          />
        </PopoverContainer>
      </Popover>
    </div>
  );
}

export default PopoverPage;
