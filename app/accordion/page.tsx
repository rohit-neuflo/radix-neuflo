"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/Accordion";
import { CaretCircleDoubleDown } from "@phosphor-icons/react";
function AccordionPage() {
  return (
    <div>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Accordion Item 1</AccordionTrigger>
          <AccordionContent>hello</AccordionContent>
        </AccordionItem>
        <AccordionItem value="2" content="outside">
          <AccordionTrigger>
            <CaretCircleDoubleDown />
            Accordion Item 2</AccordionTrigger>
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
    </div>
  );
}

export default AccordionPage;
