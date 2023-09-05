import { styled } from "../stitches.config"; 

// Custom Table component
const Table = styled("table", {
  width: "100%",
  fontFamily: "Poppins", // Replace with your desired font
  fontSize:"14px",
  borderCollapse: "separate",
  borderSpacing: 0,
});

// Custom TableHeader component
const TableHeader = styled("thead", {
  borderBottom: "1px solid $border", // Replace with your border color
});

// Custom TableBody component
const TableBody = styled("tbody", {
  "&:last-child": {
    borderBottom: "none", // Remove border from the last child
  },
});

// Custom TableRow component
const TableRow = styled("tr", {
  borderBottom: "1px solid $border", // Replace with your border color
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)", // Replace with your hover background color
  },
  "&[data-state=selected]": {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Replace with your selected background color
  },
});

// Custom TableHead component
const TableHead = styled("th", {
  fontWeight:"$regular",
  height: "40px", // Adjust the height as needed
  paddingLeft: "8px", // Adjust the padding as needed
  textAlign: "left",
  verticalAlign: "middle",
  color: "black", // Replace with your text color
  "&:has([role=checkbox])": {
    paddingRight: 0, // Remove right padding if there's a checkbox
  },
  "&[role=checkbox]": {
    transform: "translateY(2px)", // Adjust vertical alignment for checkboxes
  },
});

// Custom TableCell component
const TableCell = styled("td", {
  padding: "8px", // Adjust the padding as needed
  textAlign: "left",
  verticalAlign: "middle",
  "&:has([role=checkbox])": {
    paddingRight: 0, // Remove right padding if there's a checkbox
  },
  "&[role=checkbox]": {
    transform: "translateY(2px)", // Adjust vertical alignment for checkboxes
  },
});

// Custom TableCaption component
const TableCaption = styled("caption", {
  marginTop: "16px", // Adjust the margin as needed
  fontSize: "0.875rem", // Replace with your desired font size
  color: "black", // Replace with your text color
});

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
