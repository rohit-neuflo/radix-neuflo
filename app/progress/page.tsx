"use client";
import React from "react";
import ProgressBar from "@/components/Progress";




export default function page() {
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
        padding:"40px",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <ProgressBar  size="6xs" value={percentage} />
      <ProgressBar  size="5xs" value={percentage} />
      <ProgressBar  size="4xs" value={percentage} />
      <ProgressBar  size="3xs" value={percentage} />

      <ProgressBar  size="2xs" value={percentage} />


    </div>
  );
}


