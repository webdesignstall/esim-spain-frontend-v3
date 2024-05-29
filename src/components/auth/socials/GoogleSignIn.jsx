import { FaGoogle } from "react-icons/fa6";
import AuthApi from "../../../apis/auth/AuthApi";
import { SocialProvider } from "@/common/constant/app";
import { signInAction } from "@/store/auth/authActions";
import { Progress } from "d-react-components";
import moment from "moment";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;
    const { expires, user, idToken } = session;
    if (!idToken) return;

    const expiresTime = moment(expires).valueOf();
    if (expiresTime < new Date().getTime()) {
      return;
    }
    const APISocial = [
      {
        method: AuthApi.loginSocial,
        params: [SocialProvider.GOOGLE, idToken],
      },
    ];
    Progress.show(APISocial, ([res]) => {
      console.log({ GoogleLogin: res });
      const { accessToken, isRegistered, profile } = res?.data?.data ?? {};
      if (isRegistered) {
        dispatch(signInAction({ profile, accessToken }));
        return true;
      }
    });
  }, [session]);
  return (
    <button
      onClick={() =>
        signIn(SocialProvider.GOOGLE, {
          callbackUrl: document.URL + "?provider=" + SocialProvider.GOOGLE,
        })
      }
      type="button"
      className="text-white w-full font-semibold flex gap-3 justify-center items-center bg-[#C09D5E] px-4 border border-[#C09D5E] rounded-full 2xl:py-4 py-2"
    >
      <FaGoogle />
      <span>Sign In with Google</span>
    </button>
  );
};

export default GoogleSignIn;
