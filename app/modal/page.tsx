"use client";
import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Input,
} from "@/src";

function ModalPage() {
  return (
    <div>
      {/* <Modal>
            <ModalTrigger asChild>
                <Button>Open modal</Button>
            </ModalTrigger>
            <ModalContent title='hello'>
                <form style={{display:'flex',flexDirection:'column',gap:'0.5rem', justifyContent:'center'}}>
                    <input/>
                    <input type='number'/>
                </form>
            </ModalContent>
        </Modal> */}
      <Modal>
        <ModalTrigger asChild>
          <Button>open modal</Button>
        </ModalTrigger>
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

export default ModalPage;
