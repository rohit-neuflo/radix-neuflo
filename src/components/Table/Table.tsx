import React, { useState } from "react";
import { styled } from "@/stitches.config";
import { Checkbox } from "../Checkbox";

// Styled components for the table
const TableWrapper = styled("div", {
  overflow: "auto",
  width: "100%",
});

const TableHeader = styled("thead", {
  borderBottom: "1px solid $border",
});

const TableBody = styled("tbody", {
  "&:last-child": {
    borderBottom: "none",
  },
});

const TableHead = styled("th", {
  height: "40px",
  paddingLeft: "8px",
  textAlign: "left",
  fontWeight: "$heading",
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

const TableRow = styled("tr", {
  borderBottom: "1px solid $border",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "$secondary-hover",
  },
  "&[data-state=selected]": {
    backgroundColor: "$secondary-hover",
  },
});

const TableStyled = styled("table", {
  background: "$surfaceColor",
  width: "100%",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: "$regular",
  borderCollapse: "separate",
  borderSpacing: 0,
  borderRadius: "8px",
  [`& ${TableRow}:first-of-type`]: {
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  [`& ${TableRow}:first-of-type`]: {},
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

const Table: React.FC<SelectableTableProps> = ({
  data,
  onSelect,
  selectable,
}) => {
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
  };

  // Function to handle select all
  const handleSelectAll = () => {
    if (!selectAll) {
      // Select all rows
      const allRowIds = data.map((row) => row.id);
      setSelectedRows(allRowIds);
    } else {
      // Deselect all rows
      setSelectedRows([]);
    }
    setSelectAll(!selectAll);
  };

  // Effect to notify the parent component of the selected data
  React.useEffect(() => {
    const selectedData = data.filter((row) => selectedRows.includes(row.id));
    onSelect(selectedData);
  }, [selectedRows, data, onSelect]);

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
                  onCheckedChange={handleSelectAll}
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
            >
              <TableCell>
                {selectable && (
                  <Checkbox
                    label=""
                    // id={`checkbox-${row.id}`}
                    checked={selectedRows.includes(row.id)}
                    onCheckedChange={() => handleRowSelect(row.id)}
                  />
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
