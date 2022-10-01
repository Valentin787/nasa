import { Suspense } from "react";
import { useSelector } from "react-redux";

import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "components/AuthNav";
import Loader from "components/common/Loader";

import { getIsLoggedIn } from "redux/auth/authSelector";

import s from "./AppBar.module.css";


const AppBar = () => {
  
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <nav className={s.container}>
        <Suspense fallback={<Loader/>}>
          <Navigation />
        </Suspense>
        
        {isLoggedIn ? <UserMenu /> : <Suspense fallback={<Loader/>}>
          <AuthNav />
        </Suspense>}
      </nav>
      <hr />
    </header>
  );
};


export default AppBar;
