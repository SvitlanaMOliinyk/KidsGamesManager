import { createContext, useState } from "react";

export const SignContext = createContext({});

export const SignProvider = ({ children }) => {
  const [sign, setSign] = useState(false);

  return (
    <SignContext.Provider value={[sign, setSign]}>
      {children}
    </SignContext.Provider>
  );
};
