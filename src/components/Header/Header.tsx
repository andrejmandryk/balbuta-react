import "./Header.css";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <nav className="nav-bar">
        <Button className="link" component={RouterLink} to="bel-balb">
          Беларуска-бальбутанскі слоўнік
        </Button>
        <Button className="link" component={RouterLink} to="balb-bel">
          Бальбутанска-беларускі слоўнік
        </Button>
        <Button className="link" component={RouterLink} to="pravily">
          Правілы бальбуты
        </Button>
      </nav>
    </AppBar>
  );
};

export default Header;
