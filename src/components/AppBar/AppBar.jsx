import React, { Suspense } from "react";
import PropTypes from "prop-types";
import s from "./AppBar.module.css";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = (props) => {
  return (
    <header>
      <nav className={s.container}>
        <Suspense fallback={"...Loading"}>
          <Navigation />
        </Suspense>

        <UserMenu />
        {/* {isLoggedIn ? <UserMenu /> : <Suspense fallback={<Loader />}>
          <AuthNav />
        </Suspense>} */}
      </nav>
      <hr />
    </header>
  );
};

AppBar.propTypes = {};

export default AppBar;
