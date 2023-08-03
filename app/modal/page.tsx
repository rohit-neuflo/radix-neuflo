"use client";
import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "../../components/Modal";
import { Button } from "../../components/Button";
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
          <form style={{display:'flex',flexDirection:'column',gap:'0.5rem', justifyContent:'center'}}>
                    <input/>
                    <input type='number'/>
            </form>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" size="md">Label</Button>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </div>
  );
}

export default ModalPage;
