"use client";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/Accordion";
import { Switch } from "../components/Switch";
import { ChipsGroup, Chip } from "@/components/Chips";
import {
  Banner,
  BannerTrigger,
  BannerContent,
  BannerCancel,
} from "@/components/Banner";
import {
  CaretCircleDoubleDown,
  Lightbulb,
  CaretLeft,
  Bell,
} from "@phosphor-icons/react";
import { Header } from "@/components/Header";
import AuthInput from "@/components/AuthInput";
import { Tabs, TabsList, TabItem, TabContent } from "../components/Tabs";
import { Button } from "@/components/Button";
import {
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "../components/Modal";
import {
  Drawer,
  DrawerTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from "../components/Drawer";
import {
  Snackbar,
  SnackbarProvider,
  SnackbarAction,
} from "@/components/Snackbar";
import { Input } from "@/components/Input";
import {
  Popover,
  PopoverContainer,
  PopoverHeader,
  PopoverTrigger,
  PopoverContent,
  PopoverFooter,
} from "@/components/Popover";
import { Spinner } from "../components/Loader";
import { Footer } from "@/components/Footer";
export default function Home() {
  const handleBellClick = () => {
    console.log("Bell icon clicked!");
  };

  const handleCaretLeftClick = () => {
    console.log("CaretLeft icon clicked!");
  };
  const [open1, setOpen1] = React.useState(false);
  const [authCode, setAuthCode] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auth code:", authCode);
    setError(true);
  };
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
  return (
    <div style={{ height: "100%" }}>
      <Tabs defaultValue="1">
        <TabsList>
          <TabItem value="1">modal</TabItem>
          <TabItem value="2">popover</TabItem>
          <TabItem value="3">drawer</TabItem>
          <TabItem value="4">banner</TabItem>
          <TabItem value="5">snackbar</TabItem>
          <TabItem value="6">loader</TabItem>
          <TabItem value="7">Input</TabItem>
          <TabItem value="8">Accordion</TabItem>
          <TabItem value="9">Header</TabItem>
          <TabItem value="10">Footer</TabItem>
          <TabItem value="11">Buttons</TabItem>
          <TabItem value="12">Switch</TabItem>
          <TabItem value="13">Chips</TabItem>
        </TabsList>
        <TabContent value="1">
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
        </TabContent>
        <TabContent value="2">
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
                  <Input type="text" placeholder="Enter your name" />
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
        </TabContent>
        <TabContent value="3">
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
        </TabContent>
        <TabContent value="4">
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
        </TabContent>
        <TabContent value="5">
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
        </TabContent>
        <TabContent value="6">
          <Spinner size="2xs" />
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </TabContent>
        <TabContent value="7">
          <form>
            <Input
              type="text"
              state="normal"
              placeholder="Text Input"
              required
              minLength={4}
              maxLength={8}
              size={10}
              Size="lg"
            />
            <Input
              type="password"
              state="normal"
              placeholder="Password Input"
            />
            <Input
              type="number"
              state="normal"
              placeholder="Number Input"
              Size="md"
            />
            <Input
              type="number"
              state="normal"
              placeholder="Number Input"
              Size="lg"
            />
            <Input
              type="number"
              state="normal"
              placeholder="Number Input"
              Size="xl"
            />
            <Input
              type="password"
              state="normal"
              placeholder="Password Input"
              Size="xl"
            />
            <Input
              type="email"
              state="normal"
              placeholder="Email Input"
              Size="xl"
            />
            <Input type="text" state="error" placeholder="Error Input" />
            <Input type="text" state="disabled" placeholder="Disabled Input" />
            <Button variant="ghost">Submit</Button>
          </form>
        </TabContent>
        <TabContent value="8">
          <Accordion type="single" defaultValue="item-1" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Accordion Item 1</AccordionTrigger>
              <AccordionContent>hello</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2" content="outside">
              <AccordionTrigger>
                <CaretCircleDoubleDown />
                Accordion Item 2
              </AccordionTrigger>
              <AccordionContent>hello again</AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Accordion Item 3</AccordionTrigger>
              <AccordionContent>wow again?</AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>Accordion Item 3</AccordionTrigger>
              <AccordionContent>wow again?</AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
              <AccordionTrigger>Accordion Item 3</AccordionTrigger>
              <AccordionContent>wow again?</AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabContent>
        <TabContent value="9">
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
        </TabContent>
        <TabContent value="10">
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
          <div>
            <Footer
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
          </div>
        </TabContent>
        <TabContent value="11">
          <Tabs defaultValue="1" variant="segments">
            <TabsList>
              <TabItem value="1">Primary</TabItem>
              <TabItem value="2">Secondary</TabItem>
              <TabItem value="3">Ghost</TabItem>
              <TabItem value="4">Stroke</TabItem>
            </TabsList>
            <TabContent value="1">
              <Button size="xs">Button</Button>
              <Button size="sm">Button</Button>
              <Button size="md">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="xl">Button</Button>
            </TabContent>
            <TabContent value="2">
              <Button size="xs" variant="secondary">
                Button
              </Button>
              <Button size="sm" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="xl" variant="secondary">
                Button
              </Button>
            </TabContent>
            <TabContent value="3">
              <Button size="xs" variant="ghost">
                Button
              </Button>
              <Button size="sm" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="xl" variant="ghost">
                Button
              </Button>
            </TabContent>
            <TabContent value="4">
              <Button size="xs" variant="stroke">
                Button
              </Button>
              <Button size="sm" variant="stroke">
                Button
              </Button>
              <Button size="md" variant="stroke">
                Button
              </Button>
              <Button size="lg" variant="stroke">
                Button
              </Button>
              <Button size="xl" variant="stroke">
                Button
              </Button>
            </TabContent>
          </Tabs>
        </TabContent>
        <TabContent value="12">
          <div>
            <Switch size="2xs" />
            <Switch />
            <Switch size="sm" />
          </div>
          <div>
            <Switch size="2xs" type="rounded" />
            <Switch type="rounded" />
            <Switch size="sm" type="rounded" />
          </div>
          <div>
            <Switch size="2xs" type="square" />
            <Switch type="square" />
            <Switch size="sm" type="square" />
          </div>
        </TabContent>
        <TabContent value="13">
          <ChipsGroup type="multiple">
            <Chip value="1" size="sm">
              Hello world
              <Lightbulb />
            </Chip>
            <Chip value="2" size="md">
              <Lightbulb /> Hello World
            </Chip>
            <Chip value="3" size="md">
              Hello world
            </Chip>
          </ChipsGroup>
        </TabContent>
      </Tabs>
    </div>
  );
}
