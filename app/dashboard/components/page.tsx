"use client";
import React from "react";
import { Tabs, TabsList, TabItem, TabContent } from "@/components/Tabs";
import { Separation } from "@/components/Separator";
import { Table } from "@/components/Table"; // Import your custom Table component
import { Spinner } from "@/components/Loader";

import { Banner,BannerTrigger,BannerContent,BannerCancel } from "@/components/Banner";

import EditableTitle from "@/components/EditableTitle";
import {
  Modal,
  ModalTrigger,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/Modal";
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
import {
  Drawer,
  DrawerTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from "@/components/Drawer";  
import { Avatar } from "@/components/Avatar";
interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const data: RowData[] = [
  { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 28, email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", age: 35, email: "bob@example.com" },
  // Add more data as needed
];

function DashComponents() {
  const [selectedData, setSelectedData] = React.useState<RowData[]>([]);

  const handleSelect = (selectedItems: RowData[]) => {
    setSelectedData(selectedItems);
  };
  const action = [<BannerCancel asChild>
    <Button size="sm" variant="ghost">Discard</Button></BannerCancel>,
    <Button size="sm" variant="secondary">Confirm</Button>]
  return (
    <div>
      <Tabs defaultValue="1" variant="pills">
        <TabsList>
          <TabItem value="1">Table</TabItem>
          <TabItem value="2">Loader</TabItem>
          <TabItem value="3">Editable</TabItem>
          <TabItem value="4">Modal</TabItem>
          <TabItem value="5">Drawer</TabItem>
          <TabItem value="6">Popover</TabItem>
          <TabItem value="7">Avatar</TabItem>
          <TabItem value="8">Banner</TabItem>
        </TabsList>
        <Separation />
        <TabContent value="1">
          <Table data={data} onSelect={handleSelect} selectable />
        </TabContent>
        <TabContent value="2">
          <Spinner size="2xs" />
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </TabContent>
        <TabContent value="3">
          <EditableTitle initialTitle={"Editable Title"} size="sm" />
          <EditableTitle initialTitle={"Editable Title"} size="md" />
          <EditableTitle initialTitle={"Editable Title"} size="lg" />
        </TabContent>
        <TabContent value="4">
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
        <TabContent value="5">
        <Drawer>
        <DrawerTrigger asChild>
          <Button>open drawer</Button>
        </DrawerTrigger>
        <DrawerContainer>
          <DrawerHeader title="Title"/>
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
        <TabContent value="6">
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
        </TabContent>
        <TabContent value="7">
    
        <Avatar size="md"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" variant='square'/>
        <Avatar size="lg"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" />
        <Avatar size="xl"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" />
        <Avatar size="2xl"  alt="David Nuges" badgePosition="top-right" badgeStatus="online" />
        

        </TabContent>
        <TabContent value="8">
        <Banner>
            <BannerTrigger asChild>
               <Button>Banner</Button>
            </BannerTrigger>
            <BannerContent title="Merged Pull Request" description="Pull request #9999 merged after a successful build" actionType="button" action={action}/>
        </Banner>
        </TabContent>
      </Tabs>
    </div>
  );
}

export default DashComponents;
