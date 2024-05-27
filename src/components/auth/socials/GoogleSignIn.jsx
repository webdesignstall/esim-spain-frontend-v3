import { FaGoogle } from "react-icons/fa6";

const GoogleSignIn = () => {
  return (
    <button
      type="button"
      className="text-white w-full font-semibold flex gap-3 justify-center items-center bg-[#C09D5E] px-4 border border-[#C09D5E] rounded-full 2xl:py-4 py-2"
    >
      <FaGoogle />
      <span>Sign In with Google</span>
    </button>
  );
};

export default GoogleSignIn;
