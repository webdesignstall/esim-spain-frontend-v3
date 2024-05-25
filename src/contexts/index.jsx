import React from "react";
import AuthProvider from "./AuthProvider";
import CountryProvider from "./CountryProvider";
import CurrencyProvider from "./CurrencyProvider";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CurrencyProvider>
        <CountryProvider>{children}</CountryProvider>
      </CurrencyProvider>
    </AuthProvider>
  );
};

export default AppProvider;
