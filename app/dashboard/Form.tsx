"use client";
import { Input } from "@/components/Input";
import React from "react";
import { Button } from "@/components/Button";
import Calendar from "@/components/DatePicker";

function Form() {
  return (
    <div style={{ height: "100%" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <Calendar range />
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
        <Input type="password" placeholder="Disabled Password Input" disabled/>
        <Input type="number" error="does not match" placeholder="Number Input" Size="md" />
        <Button variant="ghost">Submit</Button>
      </form>
    </div>
  );
}

export default Form;
