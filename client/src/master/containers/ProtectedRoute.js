import React from "react";
import { Navigate } from "react-router-dom";
import { useAppScope } from "..";

export const ProtectedRoute = ({ children, redirectTo }) => {
  const {
    AppState: { accessToken },
  } = useAppScope();

  return accessToken ? children : <Navigate to={redirectTo} />;
};
