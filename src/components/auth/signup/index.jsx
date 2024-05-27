import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import signUpImage from "../../../assets/images/signupBgImage.png";
import logo from "../../../assets/pirateLogo.svg";
import GoogleSignIn from "../socials/GoogleSignIn";
import FacebookSignIn from "../socials/FacebookSignIn";

const SignUpPage = () => {
  const [toggle, setToggle] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center">
      <div className="flex w-full justify-center">
        <div className="w-[53%] relative">
          <Image
            className="w-full h-full object-cover"
            src={signUpImage}
            alt="login image"
          />
          <Link href={"/"}>
            <Image className="absolute top-10 left-10" src={logo} alt="logo" />
          </Link>
          <p className="text-white absolute bottom-10 left-10">
            &copy; {new Date().getFullYear()} , eSIM Powered by Pirate Mobile
          </p>
        </div>
        <div className="w-[47%] pr-16 flex flex-col">
          <div className="2xl:px-20 lg:px-10 py-16">
            <div className="text-white">
              <p className="flex items-center gap-3 justify-end">
                <span>Already have an account?</span>
                <Link className="text-[#C09D5E]" href={"/signin"}>
                  Sign In
                </Link>
                <span className="p-3 border rounded-2xl border-[#C09D5E] bg-[#221f1f] ">
                  <BsThreeDots className="text-2xl" />
                </span>
              </p>
            </div>
            <h4 className="text-4xl mt-20 mb-10 text-white font-semibold">
              Sign Up
            </h4>
            <div className="flex w-full gap-5 items-center justify-between mb-12">
              <div className="w-3/5">
                <GoogleSignIn />
              </div>
              <div className="w-2/5">
                <FacebookSignIn />
              </div>
            </div>
            <hr className="w-10 border-[#C0BDCC]" />
            <p className="text-[#D2D2D2] text-sm mt-5 mb-10">
              Or sign in using your email address
            </p>
            <form className="w-full" onSubmit={handleSubmit(handleSignUp)}>
              <div className="flex justify-between gap-4 mb-4 w-full">
                <div className="flex flex-col w-full">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className={`bg-[#221f1f] text-white text-lg px-5 py-3 rounded-3xl border ${
                      errors.name ? "border-red-500" : "border-[#3D3D3D]"
                    }`}
                    type="name"
                    {...register("name")}
                    placeholder="Mostofa"
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full ">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="username"
                  >
                    User Name
                  </label>
                  <div className="relative w-full">
                    <input
                      className={`bg-[#221f1f] text-white text-lg px-5 w-full py-3 rounded-3xl border ${
                        errors.username ? "border-red-500" : "border-[#3D3D3D]"
                      }`}
                      type="text"
                      {...register("username")}
                      placeholder="mostofa123"
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-4 w-full">
                <div className="flex flex-col w-full">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="email"
                  >
                    Your email
                  </label>
                  <input
                    className={`bg-[#221f1f] text-white text-lg px-5 py-3 rounded-3xl border ${
                      errors.email ? "border-red-500" : "border-[#3D3D3D]"
                    }`}
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="youremail@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full ">
                  <label
                    className="text-white text-md font-normal mb-3"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      className={`bg-[#221f1f] text-white text-lg px-5 w-full py-3 rounded-3xl border ${
                        errors.password ? "border-red-500" : "border-[#3D3D3D]"
                      }`}
                      type={toggle ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      placeholder="********"
                    />
                    <button
                      type="button"
                      className="text-white absolute bottom-5 text-lg right-3"
                      onClick={() => setToggle((prev) => !prev)}
                    >
                      {toggle ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-5 mt-5 items-center">
                <input
                  type="checkbox"
                  {...register("termsAndCondition")}
                  className="text-white"
                />
                <label className="text-white" htmlFor="remember">
                  I accept the Terms and Conditions
                </label>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="text-white font-semibold flex gap-3 items-center bg-[#C09D5E] px-14 rounded-full py-4"
                >
                  <span>Sign Up Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
