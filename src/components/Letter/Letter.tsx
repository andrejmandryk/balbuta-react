import { Link } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Letter = ({ letter }) => {
  const [, setParams] = useSearchParams();

  return (
    <Link
      component="button"
      variant="h6"
      className="letter"
      onClick={() => setParams({ letter: letter })}
    >
      {letter.toUpperCase()}
    </Link>
  );
};

export default Letter;
