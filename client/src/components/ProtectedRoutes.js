import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { SignContext } from "../context/SignContext";

function ProtectedRoutes() {
  const [sign] = useContext(SignContext);
  return <>{sign ? <Outlet /> : <Navigate to="login" />}</>;
}

export default ProtectedRoutes;
