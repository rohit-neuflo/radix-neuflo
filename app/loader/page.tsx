"use client";
import React from "react";
import { Spinner } from "@/src";
function LoaderPage() {
  return (
    <div>
      <Spinner size="2xs" />
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  );
}

export default LoaderPage;
