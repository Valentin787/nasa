import { Suspense } from "react";
import { useSelector } from "react-redux";
// import PropTypes from "prop-types";

import Navigation from "../Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "components/AuthNav";
import { getIsLoggedIn } from "redux/auth/authSelector";
import s from "./AppBar.module.css";

const AppBar = () => {
  
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <nav className={s.container}>
        <Suspense fallback={"...Loading"}>
          <Navigation />
        </Suspense>
        
        {isLoggedIn ? <UserMenu /> : <Suspense fallback={"...Loading"}>
          <AuthNav />
        </Suspense>}
      </nav>
      <hr />
    </header>
  );
};

AppBar.propTypes = {};

export default AppBar;
