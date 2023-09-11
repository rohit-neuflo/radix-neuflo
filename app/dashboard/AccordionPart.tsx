"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";

function AccordionPart() {
  return (
    <div>
      <Accordion type="single" collapsible size="xl">
        <AccordionItem value="1">
          <AccordionTrigger
          // leftIcons={
          //   <>
          //     <CaretCircleDoubleDown />
          //   </>
          // }
          >
            Accordion Item 1
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            aperiam optio magnam molestias expedita autem nostrum libero minima
            laudantium. Quasi quisquam tenetur doloribus quaerat voluptatibus
            aliquid suscipit hic sequi non.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2" content="outside">
          <AccordionTrigger
          // leftIcons={
          //   <>
          //     <CaretCircleDoubleDown />
          //     <CaretCircleDoubleDown />
          //     <CaretCircleDoubleDown />
          //   </>
          // }
          // rightIcons={
          //   <>
          //     <CaretCircleDoubleDown />
          //     <CaretCircleDoubleDown />
          //     <CaretCircleDoubleDown />
          //   </>
          // }
          >
            Accordion Item 2
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo
            voluptatem dolor possimus repellendus in natus at, illum aut
            provident? Ex quaerat error laudantium? Quae in ab doloremque fugiat
            magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita, repellat porro. Dolorum consectetur quae necessitatibus
            libero labore ipsum enim quam ut eveniet amet, possimus doloribus
            repudiandae beatae inventore iusto nam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Accordion Item 3</AccordionTrigger>
          <AccordionContent>wow again?</AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger
          // rightIcons={
          //   <>
          //     <CaretCircleDoubleDown />
          //     <CaretCircleDoubleDown />
          //   </>
          // }
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

export default AccordionPart;
