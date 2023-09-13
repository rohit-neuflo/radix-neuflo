"use client";
import React from "react";
import {
  Tooltip,
  Button,
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Input,
} from "@/src";

function TooltipPage() {
  return (
    <div>
      <Modal>
        <Tooltip side="right" content="Tooltip content">
          <ModalTrigger asChild>
            <Button>Tooltip trigger</Button>
          </ModalTrigger>
        </Tooltip>
        <ModalContainer>
          <ModalHeader title="Title" />
          <ModalContent>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              <Input type="text" placeholder="Enter your name" />
              <Input type="number" />
            </form>
          </ModalContent>
          <ModalFooter
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
        </ModalContainer>
      </Modal>
    </div>
  );
}

export default TooltipPage;
