import "./SearchInput.css";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
const SearchInput = () => {
  const [, setParams] = useSearchParams();

  return (
    <TextField size="small" onChange={(e) => setParams({ q: e.target.value })} variant="outlined" />
  );
};

export default SearchInput;
