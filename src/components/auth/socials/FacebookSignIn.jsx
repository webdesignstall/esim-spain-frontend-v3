import { FaFacebook } from "react-icons/fa6";

const FacebookSignIn = () => {
  return (
    <button
      type="button"
      className="text-white w-full font-semibold flex gap-3  border items-center bg-[#584d4d] px-14 rounded-full py-4"
    >
      <FaFacebook />
      <span>With Facebook</span>
    </button>
  );
};

export default FacebookSignIn;
