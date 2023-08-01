"use client";
import { Button } from "@/components/Button";
import { Separation}  from "@/components/Separator";
import React from "react";
import {
  DropdownMenuPanel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";

export default function DropdownPage() {
    const [item,setItem] = React.useState("List Item")
  return (
    
    <div>
     <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
            <Button size="md">Click Me!</Button>
        </DropdownMenuTrigger>
        <DropdownMenuPanel>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    {/* <SearchBar/> */}
                    <SearchBar/>
                </DropdownMenuLabel>
                <Separation/>
                <DropdownMenuItem>List Item</DropdownMenuItem>
                <DropdownMenuItem>List Item</DropdownMenuItem>
                <DropdownMenuItem>List Item</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuPanel>
     </DropdownMenuRoot>
     <DropdownMenuRoot>
        <DropdownMenuTrigger asChild style={{
            margin:"1rem"
        }}>
            <Button size="md">Click Me!</Button>
        </DropdownMenuTrigger>
        <DropdownMenuPanel>
            <DropdownMenuContent>
                {/* <DropdownMenuLabel>Single Line Item</DropdownMenuLabel> */}
                <DropdownMenuRadioGroup value={item} onValueChange={setItem}>
                 <DropdownMenuRadioItem value={"List Item"}>
                    List Item
                    </DropdownMenuRadioItem>
                 <DropdownMenuRadioItem value={"List Item"}>List Item</DropdownMenuRadioItem>
                 <DropdownMenuRadioItem value={"List Item"}>List Item</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
               
            </DropdownMenuContent>
        </DropdownMenuPanel>
     </DropdownMenuRoot>
     </div>
  
  );
}
