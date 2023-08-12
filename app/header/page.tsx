"use client";
import React from "react";
import { Bell, CaretLeft, X } from "@phosphor-icons/react";
import { Header } from "@/components/Header";
import * as Dialog from "@radix-ui/react-dialog";

function DialogClose() {
  return (
    <Dialog.Root>
      <Dialog.Close asChild>
        <X />
      </Dialog.Close>
    </Dialog.Root>
  );
}
export default function HeaderPage() {
  const handleBellClick = () => {
    console.log("Bell icon clicked!");
  };

  const handleCaretLeftClick = () => {
    console.log("CaretLeft icon clicked!");
  };

  return (
    <div>
      <Header title="Title" iconsRight={[{ Icon: DialogClose }]} />
      <Header
        title="Title"
        iconsLeft={[{ Icon: CaretLeft, onClick: handleCaretLeftClick }]}
      />
      <Header title="Title" />
      <Header title="Title" divider={true} />
      <Header
        iconsRight={[{ Icon: Bell, onClick: handleBellClick }]}
        iconPosition="right"
      />
      <Header
        iconsLeft={[{ Icon: CaretLeft, onClick: handleCaretLeftClick }]}
        iconsRight={[{ Icon: Bell, onClick: handleBellClick }]}
        divider
      />
      <Header
        iconsRight={[
          { Icon: Bell, onClick: handleBellClick },
          { Icon: Bell, onClick: handleBellClick },
        ]}
        divider={true}
        iconPosition="right"
      />
      <Header
        title="Title"
        iconsLeft={[
          { Icon: Bell, onClick: handleBellClick },
          { Icon: Bell, onClick: handleBellClick },
        ]}
        iconsRight={[
          { Icon: Bell, onClick: handleBellClick },
          { Icon: Bell, onClick: handleBellClick },
          { Icon: Bell, onClick: handleBellClick },
        ]}
        divider={true}
      />
    </div>
  );
}
