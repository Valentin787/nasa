// import PropTypes from "prop-types";
import NavItem from "./NavItem/NavItem";
import BallotRoundedIcon from "@mui/icons-material/BallotRounded";
import OtherHousesRoundedIcon from "@mui/icons-material/OtherHousesRounded";

import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelector";
import s from "./Navigation.module.css";

const Navigation = () => {
   const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={s.container}>
    {isLoggedIn && <>
     <NavItem
        key={"HomePage"}
        name={"HomePage"}
        icon={<OtherHousesRoundedIcon />}
        link={"/homepage"}
      />
      <NavItem
        key={"List"}
        name={"List"}
        icon={<BallotRoundedIcon />}
        link={"/list"}
        />
      </>}

    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
