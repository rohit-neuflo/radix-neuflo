'use client'
import React from 'react';
import {Gauge} from '@/components/Gauge'; // Adjust the import path

const App = () => {
  return (
    <div>
      <Gauge value={75} size="medium" showValue={true} />
    </div>
  );
};

export default App;
