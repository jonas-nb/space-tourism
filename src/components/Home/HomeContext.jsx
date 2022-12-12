import React, { useState, createContext } from "react";

export const Home_Context = createContext();

export const Home_Provider = ({ children }) => {
  let [buttonState, setButtonState] = useState(false);

  return (
    <Home_Context.Provider value={{ buttonState, setButtonState }}>
      {children}
    </Home_Context.Provider>
  );
};
