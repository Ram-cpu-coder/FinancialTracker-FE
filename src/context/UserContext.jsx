import React, { useContext, useState } from "react";
import axios from "axios";
import { autoLoginAxios } from "../../helper/axiosHelper";

// creating a context
const UserContext = React.createContext();

// providers nedded so creating it , it is a function
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const logOut = () => {
    setUser({});
    localStorage.removeItem("accessToken");
  };

  const autoLogin = async () => {
    const data = await autoLoginAxios();
    if (data) {
      if (data && data.status == "success") {
        setUser(data.user);
        return true;
      } else {
        setUser({});
        return false;
      }
    }
  };

  return (
    <UserContext.Provider
      // being exposed
      value={{ user, setUser, logOut, isLogged, setIsLogged, autoLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
