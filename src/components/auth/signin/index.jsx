import Image from "next/image";
import loginImage from "../../../assets/images/signinBgImage.png";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { Button, Checkbox, Form, Input } from "antd";
import SocialSignIn from "../socials";
import GoogleSignIn from "../socials/GoogleSignIn";
import FacebookSignIn from "../socials/FacebookSignIn";

const SignInPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-black">
      <div className="flex justify-between">
        <div className="w-[53%]">
          <Image className="w-full" src={loginImage} alt="login image" />
        </div>
        <div className="w-[47%] pr-16">
          <div className="px-20 py-16">
            <div className="text-white">
              <p className="flex items-center gap-3 justify-end">
                <span>Don't have an account?</span>
                <Link className="text-[#C09D5E]" href={"/login"}>
                  Sign In
                </Link>
                <span className="p-3 border rounded-2xl border-[#C09D5E] bg-[#221f1f] ">
                  <BsThreeDots className=" text-2xl" />
                </span>
              </p>
            </div>
            <h4 className="text-4xl mt-20 mb-10 text-white font-semibold">
              Sign In
            </h4>
            {/* <SocialSignIn /> */}
            <div className="flex w-full gap-5 items-center justify-between mb-20">
              <div className="w-3/5">
                <GoogleSignIn />
              </div>
              <div className="w-2/5">
                <FacebookSignIn />
              </div>
            </div>
            <hr className="w-10 text-[#C0BDCC]" />
            <p className="text-[#D2D2D2] text-sm mt-5 mb-10">
              Or sign in using your email address
            </p>
            <form>
              <div className="flex justify-between gap-10">
                <div className="flex flex-col w-full">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="email"
                  >
                    Your email
                  </label>
                  <input
                    className="bg-[#221f1f] text-white text-lg px-5 w-full py-3 rounded-3xl border"
                    type="email"
                    name="email"
                    id=""
                    placeholder="youremail@example.com"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="email"
                  >
                    Password
                  </label>
                  <input
                    className="bg-[#221f1f] text-white text-lg px-5 w-full py-3 rounded-3xl border"
                    type="password "
                    name="password"
                    id=""
                    placeholder="**************"
                  />
                </div>
              </div>
              <div className="flex  gap-5 mt-5">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label className="text-white" htmlFor="checkbox">
                  Remember me
                </label>
                <Link href={"/forget-password"}>
                  <span className="text-[#C09D5E] hover:underline">
                    Forget password
                  </span>
                </Link>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  className="text-white font-semibold flex gap-3 items-center bg-[#C09D5E] px-14 rounded-full py-4"
                >
                  <span>Sign In Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
