import React, { useContext, useState } from "react";
import axios from "axios";

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
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await axios.get("http://localhost:9000/api/v1/users", {
        headers: {
          Authorization: accessToken,
        },
      });

      if (response.data && response.data.status == "success") {
        setUser(response.data.user);
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
