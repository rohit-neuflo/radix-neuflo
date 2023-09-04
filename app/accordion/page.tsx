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
      <Accordion type="single" collapsible size="xl">
        <AccordionItem value="1">
          <AccordionTrigger
            leftIcons={
              <>
                <CaretCircleDoubleDown />
              </>
            }
          >
            Accordion Item 1
          </AccordionTrigger>
          <AccordionContent>hello</AccordionContent>
        </AccordionItem>
        <AccordionItem value="2" content="outside">
          <AccordionTrigger
            leftIcons={
              <>
                <CaretCircleDoubleDown />
                <CaretCircleDoubleDown />
                <CaretCircleDoubleDown />
              </>
            }
            rightIcons={
              <>
                <CaretCircleDoubleDown />
                <CaretCircleDoubleDown />
                <CaretCircleDoubleDown />
              </>
            }
          >
            Accordion Item 2
          </AccordionTrigger>
          <AccordionContent>hello again</AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Accordion Item 3</AccordionTrigger>
          <AccordionContent>wow again?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger
            rightIcons={
              <>
                <CaretCircleDoubleDown />
                <CaretCircleDoubleDown />
              </>
            }
          >
            Accordion Item 3
          </AccordionTrigger>
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
