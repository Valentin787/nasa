import {
  lazy,
  Suspense,
  useEffect
} from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getUser } from "redux/auth/authOperations";

import AppBar from "../AppBar";
import Footer from "components/Footer";
import Loader from "components/common/Loader";
import PublicRoute from "../UserMenu/PublicRoute";
import PrivateRoute from "../UserMenu/PrivateRoute";
import s from "./App.module.css";



const OneRocketPageLazy = lazy(() => import("../../pages/OneRocket"));
const ListPageLazy = lazy(() => import("../../pages/ListPage"));
const RegisterPageLazy = lazy(() => import("../../pages/auth/RegisterPage"));
const SingInPageLazy = lazy(() => import("../../pages/auth/SingInPage"));
const NotFoundPageLazy = lazy(() => import('../../pages/NotFoundPage'));


const App = () => {

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
      <div className={s.content}>
        
        <Routes>
         
          {/* //////////////////////// */}
          <Route element={<PublicRoute />}> 

          <Route
                exact
                path="/register"
                element={
                  <Suspense fallback={<Loader/>}>
                    <RegisterPageLazy />
                  </Suspense>}
              />

          <Route
                exact
                path="/sing_in"
                element={
                  <Suspense fallback={<Loader/>}>
                    <SingInPageLazy />
                  </Suspense>}
            /> 
            <Route      
              path="*"          
              element={                
                <Suspense fallback={<Loader/>}>                
                  <NotFoundPageLazy />
                </Suspense>
                }
              />
           </Route>  

          {/* //////////////////////// */}
          <Route element={<PrivateRoute />}>
              <Route
                // exact
                path="/one_rocket"
                element={
                  <Suspense fallback={<Loader/>}>
                    <OneRocketPageLazy />
                  </Suspense>
                }
              />
              <Route
                path="/list"
                element={
                  <Suspense fallback={<Loader/>}>
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


export default App;
