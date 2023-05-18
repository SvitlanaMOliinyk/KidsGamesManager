import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { SignContext } from "../context/SignProvider";

function ProtectedRoutes() {
  const { sign } = useContext(SignContext);

  const location = useLocation();
  return sign?.name ? (
    <Outlet />
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes;
