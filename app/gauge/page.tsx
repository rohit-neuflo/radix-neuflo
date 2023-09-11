'use client'
import React, { useState, useEffect } from "react";
import Gauge from "@/components/Gauge"; // Adjust the import path

const App = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPercentage = Math.floor(Math.random() * 101);
      setPercentage(randomPercentage);
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Gauge value={percentage} size="2xs" />
      <Gauge value={percentage} size="xs" />
      <Gauge value={percentage} size="sm" />
      <Gauge value={percentage} size="md" />
      <Gauge value={percentage} size="lg" />

    </div>
  );
};

export default App;
