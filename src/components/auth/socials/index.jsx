import React from "react";
import GoogleSignIn from "./GoogleSignIn";
import FacebookSignIn from "./FacebookSignIn";

const SocialSignIn = () => {
  return (
    <div className="flex w-full gap-5 items-center justify-between">
      <GoogleSignIn />
      <FacebookSignIn />
    </div>
  );
};

export default SocialSignIn;
