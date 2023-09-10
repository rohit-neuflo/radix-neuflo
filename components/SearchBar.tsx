import React from "react";
import { styled } from "../stitches.config";
import { Input, InputProps } from "./Input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({placeholder, ...props }, ref) => {
  const placeholder2 = placeholder ? placeholder : "Search";
  return(
    <Input
      ref={ref}
      {...props}
      leftIcon={<MagnifyingGlassIcon />}
      type="text"
      placeholder={placeholder2}
    />
  )
})

export { SearchBar };
