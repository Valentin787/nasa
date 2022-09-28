import { useSelector } from 'react-redux';
import { Outlet, Navigate } from "react-router-dom";
import { getIsLoggedIn } from 'redux/auth/authSelector';

const PublicRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    !isLoggedIn ? <Outlet /> : <Navigate to='/list' />

  );
};
export default PublicRoute;
