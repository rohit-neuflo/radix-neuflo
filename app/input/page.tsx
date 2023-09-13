"use client";
import { Input, Button } from "@/src";
import * as React from "react";

export default function InputPage() {
  const [input, setInput] = React.useState("demo");
  return (
    <>
      <form>
        <Input
          type="text"
          title="Input label text"
          hintText="Informative message holder"
          placeholder="Text Input"
          required
          minLength={4}
          maxLength={8}
          size={10}
          Size="lg"
        />
        <Input type="password" placeholder="Password Input" />
        <Input type="number" placeholder="Number Input" Size="md" />
        <Input type="number" placeholder="Number Input" Size="lg" />
        <Input type="number" placeholder="Number Input" Size="xl" />
        <Input type="password" placeholder="Password Input" Size="xl" />
        <Input type="email" placeholder="Email Input" Size="xl" />
        <Input
          type="text"
          error="there is an error"
          placeholder="Error Input"
        />
        <Input type="text" disabled placeholder="Disabled Input" />
        <Button variant="ghost">Submit</Button>
      </form>
    </>
  );
}
