import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";

const ProtectedRoutes = () => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;
