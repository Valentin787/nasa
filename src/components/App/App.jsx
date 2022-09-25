import {
  // useEffect,
  // useState,
  lazy,
  Suspense
} from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import AppBar from "../AppBar/AppBar";
// import PublicRoute from "../UserMenu/PublicRoute";
// import PrivateRoute from "../UserMenu/PrivateRoute";
import s from "./App.module.css";

const HomePageLazy = lazy(() => import("../../pages/HomePage"));
const ListPageLazy = lazy(() => import("../../pages/ListPage"));

const App = (props) => {
  // getItems().then(data => console.log(data))
  // console.log(getItems().then(data => data));
  return (
    <div className={s.container}>
      <AppBar />
      <div className={s.themeWrap}>
        {/* <Suspense fallback={"...Loading"}>
            </Suspense> */}

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={"...Loading"}>
                <HomePageLazy />
              </Suspense>
            }
          ></Route>
          <Route
            exact
            path="/list"
            element={
              <Suspense fallback={"...Loading"}>
                <ListPageLazy />
              </Suspense>
            }
          ></Route>
          {/* //////////////////////// */}
          {/* <Route element={
              <PublicRoute />}> */}

          {/* <Route
                exact
                path="/register"
                element={
                  <Suspense fallback={<Loader />}>
                    <RegisterLazy />
                  </Suspense>}
              /> */}

          {/* <Route
                exact
                path="/sing_in"
                element={
                  <Suspense fallback={<Loader />}>
                    <SingInPageLazy />
                  </Suspense>}
            /> */}
          {/* <Route
                path="*"
                element={
                  <Suspense fallback={<Loader/>}>
                    <NotFoundPageLazy />
                  </Suspense>
                }
              />*/}
          {/* </Route>  */}

          {/* //////////////////////// */}
          {/* <Route element={<PrivateRoute />}>
              <Route
                path="/list"
                element={
                  <Suspense fallback={"...Loading"}>
                    <ListPageLazy />
                  </Suspense>}
              />


            </Route> */}
        </Routes>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
