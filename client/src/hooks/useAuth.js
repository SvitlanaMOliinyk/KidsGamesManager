import { useContext } from "react";
import { SignContext } from "../context/SignProvider.jsx";

export const useAuth = () => {
  return useContext(SignContext);
};
