import { FaGoogle } from "react-icons/fa6";

const GoogleSignIn = () => {
  return (
    <button
      type="button"
      className="text-white w-full font-semibold flex gap-3 items-center bg-[#C09D5E] px-14 rounded-full py-4"
    >
      <FaGoogle />
      <span>Sign In with Google</span>
    </button>
  );
};

export default GoogleSignIn;
