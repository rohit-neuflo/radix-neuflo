'use client'
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/Table"; // Import the custom table components
import { Checkbox } from "@/components/Checkbox"; // Import your custom Checkbox component

interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const ExampleTable: React.FC = () => {
  // Sample data for the table
  const data: RowData[] = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 28, email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", age: 35, email: "bob@example.com" },
    // Add more data as needed
  ];

  // State to keep track of selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Function to handle row selection
  const handleRowSelect = (rowId: number) => {
    if (selectedRows.includes(rowId)) {
      // Deselect the row
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      // Select the row
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              data-state={selectedRows.includes(row.id) ? "selected" : ""}
              // onClick={() => handleRowSelect(row.id)}
            >
              <TableCell role="checkbox">
                <Checkbox
                  label=""
                  id={`checkbox-${row.id}`}
                  checked={selectedRows.includes(row.id)}
                  onClick={() => handleRowSelect(row.id)}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExampleTable;
