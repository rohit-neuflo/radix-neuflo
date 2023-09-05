import React, { useState } from "react";
import { styled } from "../stitches.config";
import { Checkbox } from "./Checkbox";

// Styled components for the table
const TableWrapper = styled("div", {
  overflow: "auto",
  width: "100%",
});

const TableStyled = styled("table", {

  width: "100%",
  fontFamily: "Poppins",
  fontSize:"14px",
  borderCollapse: "separate",
  borderSpacing: 0,
});

const TableHeader = styled("thead", {
  borderBottom: "1px solid $border",
});

const TableBody = styled("tbody", {
  "&:last-child": {
    borderBottom: "none",
  },
});

const TableRow = styled("tr", {
  borderBottom: "1px solid $border",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  "&[data-state=selected]": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

const TableHead = styled("th", {
  height: "40px",
  paddingLeft: "8px",
  textAlign: "left",
  verticalAlign: "middle",
  color: "black",
  "&:has([role=checkbox])": {
    paddingRight: 0,
  },
  "&[role=checkbox]": {
    transform: "translateY(2px)",
  },
});

const TableCell = styled("td", {
  padding: "8px",
  textAlign: "left",
  verticalAlign: "middle",
  "&:has([role=checkbox])": {
    paddingRight: 0,
  },
  "&[role=checkbox]": {
    transform: "translateY(2px)",
  },
});

const TableCaption = styled("caption", {
  marginTop: "16px",
  fontSize: "0.875rem",
  color: "black",
});

// Selectable Table component
interface SelectableTableProps {
  data: any[]; // Your table data
  onSelect: (selectedData: any[]) => void; // Callback when rows are selected
  selectable?: boolean; // Prop to enable/disable selection
}

const Table: React.FC<SelectableTableProps> = ({ data, onSelect, selectable }) => {
  // State to keep track of selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  // Function to handle row selection
  const handleRowSelect = (rowId: number) => {
    if (selectedRows.includes(rowId)) {
      // Deselect the row
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      // Select the row
      setSelectedRows([...selectedRows, rowId]);
    }

    // Get the selected data
    const selectedData = data.filter((row) => selectedRows.includes(row.id));
    onSelect(selectedData);
  };

  // Function to handle select all
  const handleSelectAll = () => {
    if (!selectAll) {
      // Select all rows
      setSelectedRows(data.map((row) => row.id));
    } else {
      // Deselect all rows
      setSelectedRows([]);
    }

    setSelectAll(!selectAll);
  };

  return (
    <TableWrapper>
      <TableStyled>
        <TableHeader>
          <TableRow>
            <TableHead>
              {selectable && (
                <Checkbox
                  label=""
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              )}
            </TableHead>
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
              onClick={() => handleRowSelect(row.id)}
            >
              <TableCell role="checkbox">
                {selectable && (
                  <Checkbox label="" checked={selectedRows.includes(row.id)} />
                )}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableWrapper>
  );
};

export { Table };
