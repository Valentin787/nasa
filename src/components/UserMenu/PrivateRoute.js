// import { useSelector } from 'react-redux'
import { Navigate, Outlet } from "react-router-dom";
// import { authSelectors } from '../../redux/auth'

const PrivateRoute = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(`isLoggedIn ->>`, isLoggedIn)

  ////Space_X
  // const token = useSelector(authSelectors.getToken);

  return (
    // token ? <Outlet /> : <Navigate to='/sing_in' />
    <Outlet />
  );
};

export default PrivateRoute;
