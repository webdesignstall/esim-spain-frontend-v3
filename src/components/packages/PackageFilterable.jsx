import { useCallback, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const packages = ["Daily", "Weekly", "Monthly", "Unlimited"];

const PackageFilterable = ({ setPackageType }) => {
  const [selectedPackage, setSelectedPackage] = useState("Daily");
  const [dropDown, setDropDown] = useState(false);

  const handleSelectPackage = useCallback((pkg) => {
    setSelectedPackage(() => pkg);
    setPackageType(() => pkg);
  }, []);

  const handleDropDownPackage = useCallback((pkg) => {
    setSelectedPackage(() => pkg);
    setPackageType(() => pkg);
    setDropDown(() => false);
  }, []);

  return (
    <>
      {/* larger devices  */}
      <div className="lg:block hidden">
        <div className="text-white text-base font-medium flex justify-between gap-3 bg-[#69645E] border border-[#927148] rounded-full p-2">
          {packages.map((pkg) => (
            <button
              className={`px-5 py-3 rounded-full ${
                selectedPackage === pkg && "bg-[#C09D5E]"
              }`}
              onClick={() => handleSelectPackage(pkg)}
            >
              {pkg} Packages
            </button>
          ))}
        </div>
      </div>
      {/* smaller devices  */}
      <div className="lg:hidden block relative">
        <div className="text-white text-base  flex justify-between gap-3 bg-[#69645E] border border-[#927148] rounded-full p-1">
          <button
            onClick={() => setDropDown((prev) => !prev)}
            className="bg-[#C09D5E] w-full flex items-center justify-between px-3 py-2 rounded-full"
          >
            <span> {selectedPackage} Packages</span>
            <span>
              <FaAngleDown className={`${dropDown && "rotate-180"}`} />
            </span>
          </button>
        </div>
        {dropDown && (
          <div className="bg-white shadow-lg w-full overflow-hidden z-50 flex flex-col gap-2 rounded-md p-2 top-14 absolute">
            {packages.map((pkg) => (
              <button
                onClick={() => handleDropDownPackage(pkg)}
                className="bg-[#776f60] p-2 w-full text-start rounded-md text-white"
              >
                {pkg} Packages
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PackageFilterable;
