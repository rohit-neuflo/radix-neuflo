'use client'
import React, { useState } from "react";
import {Table} from "@/components/Table"; // Import the SelectableTable component

const ExampleApp: React.FC = () => {
  // Sample data for the table
  const data = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 28, email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", age: 35, email: "bob@example.com" },
    // Add more data as needed
  ];

  // State to store the selected data
  const [selectedData, setSelectedData] = useState<any[]>([]);

  // Callback function to handle selected data
  const handleSelect = (selectedItems: any[]) => {
    setSelectedData(selectedItems);
  };

  return (
    <div>
      <Table data={data} onSelect={handleSelect} />
    </div>
  );
};

export default ExampleApp;
