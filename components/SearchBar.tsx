import { styled } from "../stitches.config";

 const TextBar = styled("input", {
  
  fontSize: "$sm",
  //   backgroundColor: "red",
  borderRadius: "4px",
  border: "1px solid #ccc",
  //   border: "none",
  width: "100%",
  outline: "none",
  "&::placeholder": {
    color: "#aaa",
  },
  "&:focus": {
    border: "1px solid black",
  },
});

const SearchBarRoot = styled("div", {
    height:'3.5rem',
    padding: '1rem'
})
export default function SearchBar() {
  return(
    <SearchBarRoot>
        <TextBar placeholder="Search"/>
    </SearchBarRoot>
  );
}
