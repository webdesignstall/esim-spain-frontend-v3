import { useCallback, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const packagesFilter = ["Custom", "Daily", "Weekly", "Monthly", "Unlimited"];

const PackageFilterable = ({ setPackageType, packages }) => {
  const [selectedPackage, setSelectedPackage] = useState("Daily");
  const [dropDown, setDropDown] = useState(false);
  const [dynamicFilter, setDynamicFilter] = useState("");

  const handleSelectPackage = useCallback(
    (pkg) => {
      setDynamicFilter("All");
      setSelectedPackage(pkg);
      setPackageType(pkg);
    },
    [setPackageType]
  );

  const handleDropDownPackage = useCallback(
    (pkg) => {
      setSelectedPackage(pkg);
      setPackageType(pkg);
      setDropDown(false);
    },
    [setPackageType]
  );

  const uniqueFiltered = packages?.filter((pack, index, self) => {
    if (
      pack?.duration === 1 ||
      pack?.duration === 7 ||
      pack?.duration === 30 ||
      pack?.unlimited === true
    ) {
      return false;
    }

    return self.findIndex((p) => p?.duration === pack?.duration) === index;
  });

  const handleDynamicFilterChange = (value) => {
    const formattedValue = value === "All" ? "All" : `${value} days`;
    setDynamicFilter(value);
    setSelectedPackage(formattedValue);
    setPackageType(formattedValue);
  };

  return (
    <>
      {/* larger devices  */}
      <div className="lg:block hidden">
        <div className="text-white text-base font-medium flex justify-between gap-3 bg-[#69645E] border border-[#927148] rounded-full p-2">
          {packagesFilter.map((pkg) => (
            <div key={pkg}>
              {pkg === "Custom" ? (
                <select
                  defaultValue={dynamicFilter}
                  onChange={(e) => handleDynamicFilterChange(e.target.value)}
                  className={`px-5 py-3 rounded-full border-0 outline-none ${
                    selectedPackage?.split(" ")[0] === dynamicFilter
                      ? "bg-[#C09D5E]"
                      : "bg-[#69645E]"
                  }`}
                  name="filter"
                  id="filter"
                >
                  <option value="All">All</option>
                  {uniqueFiltered.map((pack) => (
                    <option key={pack?.duration} value={pack?.duration}>
                      {pack?.duration} days
                    </option>
                  ))}
                </select>
              ) : (
                <button
                  className={`px-5 py-3 rounded-full ${
                    selectedPackage === pkg && "bg-[#C09D5E]"
                  }`}
                  onClick={() => handleSelectPackage(pkg)}
                >
                  {pkg} Packages
                </button>
              )}
            </div>
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
            <span>{selectedPackage} Packages</span>
            <span>
              <FaAngleDown className={`${dropDown && "rotate-180"}`} />
            </span>
          </button>
        </div>
        {dropDown && (
          <div className="bg-white shadow-lg w-full overflow-hidden z-50 flex flex-col gap-2 rounded-md p-2 top-14 absolute">
            {packagesFilter.map((pkg) => (
              <button
                key={pkg}
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
