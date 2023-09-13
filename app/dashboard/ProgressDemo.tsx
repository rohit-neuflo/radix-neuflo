import React from "react";
import { Progress, Gauge } from "@/src";
import { FileX } from "@phosphor-icons/react";
function ProgressDemo() {
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
        display: "flex",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Progress size={"6xs"} value={percentage} />
        <Progress size={"5xs"} value={percentage} />
        <Progress size={"4xs"} value={percentage} />
        <Progress size={"3xs"} value={percentage} />
        <Progress size={"2xs"} value={percentage} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Gauge value={percentage} size="2xs"></Gauge>
        <Gauge value={percentage} size="xs"></Gauge>
        <Gauge value={percentage} size="sm"></Gauge>
        <Gauge value={percentage} size="md"></Gauge>
        <Gauge value={percentage} size="lg"></Gauge>
      </div>
    </div>
  );
}

export default ProgressDemo;
