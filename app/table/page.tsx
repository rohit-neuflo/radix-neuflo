'use client'
import React, { useState } from "react";
import { Table } from "@/components/Table"; // Import your custom Table component

interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const data: RowData[] = [
  { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 28, email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", age: 35, email: "bob@example.com" },
  // Add more data as needed
];

const ExampleApp: React.FC = () => {
  const [selectedData, setSelectedData] = useState<RowData[]>([]);

  const handleSelect = (selectedItems: RowData[]) => {
    setSelectedData(selectedItems);
  };

  return (
    <div>
      <Table data={data} onSelect={handleSelect} selectable/>
      <div>
        <h2>Selected Data:</h2>
        <ul>
          {selectedData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExampleApp;
