import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export const Auth = ({ children }) => {
  const { user } = useUser();

  const location = useLocation();
  return (
    <>
      {user?._id ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};
