import { createContext, useState, useEffect } from "react";

export const SignContext = createContext({});

export const SignProvider = ({ children }) => {
  const [sign, setSign] = useState(() => {
    const savedUser = localStorage.getItem("credentials");
    const parsedUser = JSON.parse(savedUser);
    return parsedUser || {};
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("sign setItem:", sign);
    if (sign !== null) {
      localStorage.setItem("credentials", JSON.stringify(sign));
    }
  }, [sign]);

  useEffect(() => {
    const userStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (userStatus) {
      setIsLoggedIn(userStatus);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  return (
    <SignContext.Provider value={{ sign, setSign, isLoggedIn, setIsLoggedIn }}>
      {children}
    </SignContext.Provider>
  );
};
