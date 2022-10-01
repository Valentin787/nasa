import { useSelector } from "react-redux";

import NavItem from "./NavItem";

import { getIsLoggedIn } from "redux/auth/authSelector";

import BallotRoundedIcon from "@mui/icons-material/BallotRounded";
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

import s from "./Navigation.module.css";

const Navigation = () => {
   const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={s.container}>
    {isLoggedIn && <>
     <NavItem
        key={"OneRocket"}
        name={"One_Rocket"}
        icon={<RocketLaunchRoundedIcon />}
        link={"/one_rocket"}
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

export default Navigation;
