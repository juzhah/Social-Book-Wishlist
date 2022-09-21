import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));  

  return (
    <UserContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </UserContext.Provider>
  );
};
