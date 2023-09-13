"use client";
import React from "react";
import { Footer, Button } from "@/src";

function FooterPage() {
  return (
    <div>
      <Footer
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
    </div>
  );
}

export default FooterPage;
