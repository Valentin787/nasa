import {
  // useState,
  lazy,
  Suspense,
  useEffect
} from "react";
import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { getUser } from "redux/auth/authOperations";

import AppBar from "../AppBar/AppBar";
import PublicRoute from "../UserMenu/PublicRoute";
import PrivateRoute from "../UserMenu/PrivateRoute";
import s from "./App.module.css";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";


const HomePageLazy = lazy(() => import("../../pages/HomePage"));
const ListPageLazy = lazy(() => import("../../pages/ListPage"));
const RegisterPageLazy = lazy(() => import("../../pages/auth/RegisterPage"));
const SingInPageLazy = lazy(() => import("../../pages/auth/SingInPage"));



const App = () => {
  // getItems().then(data => console.log(data))
  // console.log(getItems().then(data => data));
  const dispatch = useDispatch();
  const height = window.innerHeight;

  useEffect(() => {
  
    dispatch(getUser())
  }, [dispatch])
  
  return (
    <div
      style ={{minHeight:height}}
      className={s.container}>
      <AppBar />
       {/* <TemporaryDrawer />  */}
      {/* <Sidebar/> */}
      <div className={s.content}>
        
        <Routes>
         
          {/* //////////////////////// */}
          <Route element={<PublicRoute />}> 

          <Route
                exact
                path="/register"
                element={
                  <Suspense fallback={"...Loading"}>
                    <RegisterPageLazy />
                  </Suspense>}
              />

          <Route
                exact
                path="/sing_in"
                element={
                  <Suspense fallback={"...Loading"}>
                    <SingInPageLazy />
                  </Suspense>}
            /> 
          {/* <Route
                path="*"
                element={
                  <Suspense fallback={<Loader/>}>
                    <NotFoundPageLazy />
                  </Suspense>
                }
              />*/}
           </Route>  

          {/* //////////////////////// */}
          <Route element={<PrivateRoute />}>
              <Route
                // exact
                path="/homepage"
                element={
                  <Suspense fallback={"...Loading"}>
                    <HomePageLazy />
                  </Suspense>
                }
              />
              <Route
                path="/list"
                element={
                  <Suspense fallback={"...Loading"}>
                    <ListPageLazy />
                  </Suspense>
                }
            />
            </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

App.propTypes = {};

export default App;
