"use client";
import React from "react";
import { Banner, BannerTrigger, BannerContent ,BannerCancel} from "@/components/Banner";
import {
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "../../components/Modal";
import { Button } from "@/components/Button";
import { EyeClosed } from "@phosphor-icons/react";
import {
  Snackbar,
  SnackbarProvider,
  SnackbarAction,
} from "@/components/Snackbar";
import { Tabs, TabsList, TabItem, TabContent } from "../../components/Tabs";

function Demo() {
  const action = [
    <BannerCancel asChild>
      <Button size="sm" variant="ghost">
        Discard
      </Button>
    </BannerCancel>,
    <Button size="sm" variant="secondary">
      Confirm
    </Button>,
  ];
  const [open1, setOpen1] = React.useState(false);
  return (
    <div>
      <Tabs defaultValue="1">
        <TabsList>
          <TabItem value="1">$link</TabItem>
          <TabItem value="2">$link</TabItem>
        </TabsList>
        <TabContent value="1">content 1</TabContent>
        <TabContent value="2">content 2</TabContent>
      </Tabs>
      

      <Banner>
        <BannerTrigger asChild>
          <Button>Banner</Button>
        </BannerTrigger>
        <BannerContent
          title="Merged Pull Request"
          description="Pull request #9999 merged after a successful build"
          actionType="button"
          action={action}
        />
      </Banner>
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
              <input />
              <input type="number" />
            </form>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" size="md">
              Label
            </Button>
          </ModalFooter>
        </ModalContainer>
      </Modal>
      <SnackbarProvider swipeDirection="left">
        <Button onClick={() => setOpen1(!open1)}>Snackbar1</Button>
        <Snackbar
          description="Something went wrong!"
          open={open1}
          onOpenChange={setOpen1}
        >
          <SnackbarAction asChild altText="button">
            <Button>Button</Button>
          </SnackbarAction>
        </Snackbar>
      </SnackbarProvider>
    </div>
  );
}

export default Demo;
