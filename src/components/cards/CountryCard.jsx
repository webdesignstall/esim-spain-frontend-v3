import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const CountryCard = ({ country }) => {
  return (
    <div className="bg-[#343230] lg:h-[218px] h-[170px] lg:w-[230px] w-[190px]  lg:pt-0 pt-10 rounded-xl group hover:border-[1px] hover:border-[#8E8E8E] border-[1px] border-[#343230] flex flex-col items-center justify-center px-2 lg:py-7 text-center mb-16 relative">
      <div className="absolute lg:-top-28 -top-20 left-0 w-full h-full flex items-center justify-center">
        <img
          className="w-[100px] h-[100px] rounded-full border-[8px] border-[#1F1B17]"
          src={`data:image/png;base64,${country?.flag}`}
          alt="country flag"
        />
      </div>
      <div className="mb-5 lg:mt-10">
        <h4 className="lg:text-2xl text-white mb-1">{country?.name}</h4>
        <h6 className="lg:text-xl text-[#FFFFFF]">Starts at $3.5</h6>
      </div>
      <Link href={`/packages/${country?.name?.toLowerCase()}`}>
        <button className="bg-[#FFFFFF69] group-hover:bg-white p-2 rounded-full">
          <FaChevronRight />
        </button>
      </Link>
    </div>
  );
};

export default CountryCard;
