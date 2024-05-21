import React from "react";
import AuthProvider from "./AuthProvider";
import CountryProvider from "./CountryProvider";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CountryProvider>{children}</CountryProvider>
    </AuthProvider>
  );
};

export default AppProvider;
