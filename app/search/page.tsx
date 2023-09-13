"use client";
import React, { useState } from "react";
import { SearchBar } from "@/src";

function SearchPage() {
  const [value, setValue] = useState<number | string>("");
  return <SearchBar value={value} onChange={(o) => setValue(o)} />;
}

export default SearchPage;
