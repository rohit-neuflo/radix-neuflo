"use client";
import * as React from "react";
import {
  Snackbar,
  SnackbarProvider,
  SnackbarAction,
} from "@/components/Snackbar";
import { Button } from "@/components/Button";

export default function SnackbarPage() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <div>
      <SnackbarProvider swipeDirection="left">
        <Button onClick={() => setOpen1(!open1)}>Snackbar1</Button>
        <Snackbar description="Something went wrong!" open={open1} onOpenChange={setOpen1}>
            <SnackbarAction asChild altText="button">
              <Button>Button</Button>
            </SnackbarAction>
        </Snackbar>    
      </SnackbarProvider>
    </div>
  );
}
