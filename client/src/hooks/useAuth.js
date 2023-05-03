import { useContext } from "react";
import { SignContext } from "../context/SignProvider.js";

export const useAuth = () => {
  return useContext(SignContext);
};
