import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto bg-black">{children}</div>
  );
};

export default AuthLayout;
