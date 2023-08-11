"use client";
import { Input } from "@/components/Input";
import * as React from "react";
import { Button } from "@/components/Button";
export default function InputPage() {
  const [input, setInput] = React.useState("demo");
  return (
    <>
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
        <Input type="password" state="normal" placeholder="Password Input" />
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
    </>
  );
}
