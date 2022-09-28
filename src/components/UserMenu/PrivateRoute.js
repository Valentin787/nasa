import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/authSelector";

const PrivateRoute = () => {

  ////Space_X
  const token = useSelector(getIsLoggedIn);

  return (
    token ? <Outlet /> : <Navigate to='/sing_in' />
  
  );
};

export default PrivateRoute;
