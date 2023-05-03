import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function ProtectedRoutes() {
  const { sign } = useAuth();
  const location = useLocation();
  return sign?.name ? (
    <Outlet />
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes;
