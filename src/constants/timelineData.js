import { TfiWorld } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";
import { FaBorderAll } from "react-icons/fa";

const timelineData = [
  {
    title: "Choose your destination and package that suits your needs",
    description:
      "Choose the package based on your data needs for a perfect match of data usage and cost-effectiveness",
    icon: (
      <TfiWorld className="bg-[#454545] text-5xl p-3 rounded-full text-[#C09D5E]" />
    ),
    link: "https://link.com",
  },
  {
    title:
      "Confirm compatibility and click on check out to complete the purchase",
    description: "Not sure if your phone is eSIM compatible?",
    icon: (
      <CiMobile2 className="bg-[#454545] text-5xl p-3 rounded-full text-[#C09D5E]" />
    ),
  },
  {
    title: "Use the QR code provided to install and activate your eSIM",
    description:
      "After successful payment, activate your eSIM by scanning the QR code or check your email for the QR code sent to you.",
    icon: (
      <FaBorderAll className="bg-[#454545] text-5xl p-3 rounded-full text-[#C09D5E]" />
    ),
    link: "https://link.com",
  },
];

export default timelineData;
