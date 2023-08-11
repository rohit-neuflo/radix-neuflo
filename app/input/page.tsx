"use client";
import { Input } from "@/components/Input";
import * as React from "react";

export default function InputPage(){
    return(
        <>
        <Input type="text" state="normal" placeholder="Text Input" />
        <Input type="password" state="normal" placeholder="Password Input" />
        <Input type="number" state="normal" placeholder="Number Input" />
        <Input type="password" state="normal" placeholder="Password Input" />
        <Input type="text" state="error" placeholder="Error Input" />
        <Input type="text" state="disabled" placeholder="Disabled Input" />
        </>
    )
}