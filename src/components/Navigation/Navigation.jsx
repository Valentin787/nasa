import PropTypes from "prop-types";
import NavItem from "./NavItem/NavItem";
import BallotRoundedIcon from "@mui/icons-material/BallotRounded";
import OtherHousesRoundedIcon from "@mui/icons-material/OtherHousesRounded";
import s from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={s.container}>
      <NavItem
        key={"HomePage"}
        name={"HomePage"}
        icon={<OtherHousesRoundedIcon />}
        link={"/"}
      />
      <NavItem
        key={"List"}
        name={"List"}
        icon={<BallotRoundedIcon />}
        link={"/list"}
      />
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
