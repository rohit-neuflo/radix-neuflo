"use client";
import React from "react";
import { Progress } from "@/src";

export default function Page() {
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomPercentage = Math.floor(Math.random() * 101);
      setPercentage(randomPercentage);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        padding: "40px",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Progress size="6xs" value={percentage} />
      <Progress size="5xs" value={percentage} />
      <Progress size="4xs" value={percentage} />
      <Progress size="3xs" value={percentage} />

      <Progress size="2xs" value={percentage} />
    </div>
  );
}
