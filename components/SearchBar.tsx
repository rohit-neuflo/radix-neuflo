import { styled } from "../stitches.config";

const TextBar = styled("input", {
  height: "1.5rem",
  fontSize: "$sm",
  padding: "0",
  //   backgroundColor: "red",
  borderRadius: "4px",
  // border: "1px solid #ccc",
  border: "none",
  width: "100%",
  outline: "none",
  "&::placeholder": {
    color: "#aaa",
  },
});

const SearchBarRoot = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "1.5rem",
  padding: "1rem",
  borderRadius: "12px",
  // border: "1px solid none",
  "&:active": {
    outline: "2px solid $purple",
  },
});
export default function SearchBar() {
  return (
    <SearchBarRoot>
      {" "}
      <TextBar placeholder="Search" />
    </SearchBarRoot>
  );
}
