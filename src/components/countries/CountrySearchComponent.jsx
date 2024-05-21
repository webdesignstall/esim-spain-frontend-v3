import React, { useContext, useEffect, useRef, useState } from "react";
import useHandlePropagation from "../../hooks/useHandlePropagation";
import { CountryContext } from "../../contexts/CountryProvider";
import { useRouter } from "next/router";

const CountrySearchComponent = () => {
  const { countries } = useContext(CountryContext);
  const [searchValue, setSearchValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const closeModal = useHandlePropagation();
  const router = useRouter();

  const handleSearchCountry = () => {
    console.log("Search for", searchValue);
  };

  const handleSelectCountry = (country) => {
    router.push(`/packages/${country?.name?.toLowerCase()}`);
    setShowDropDown(false);
    setSearchValue("");
    inputRef.current.value = "";
  };

  useEffect(() => {
    const filterCountries = countries?.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCountries(filterCountries);
  }, [searchValue, countries]);

  useEffect(() => {
    closeModal(dropdownRef, setShowDropDown);
  }, []);

  return (
    <>
      {/* for large devices */}
      <div className="lg:w-4/6 w-full relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Where do you need data for?"
          name="search"
          defaultValue={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowDropDown(true)}
          id="search"
          className="bg-slate-700 w-full text-white lg:mx-3 lg:p-2 px-4 py-2 mb-3 lg:mb-0 lg:rounded-md rounded-full lg:border-0"
        />
        {showDropDown && (
          <div
            ref={dropdownRef}
            className="absolute bg-white z-50 w-full flex flex-col gap-3 rounded-lg h-96 overflow-y-scroll top-12 left-3 text-black"
          >
            {filteredCountries.length > 0
              ? filteredCountries.map((country) => (
                  <div
                    onClick={() => handleSelectCountry(country)}
                    className="flex items-center gap-4 cursor-pointer hover:bg-gray-300 p-3"
                    key={country?.id}
                  >
                    <img
                      className="w-20 h-12 rounded-lg"
                      src={`data:image/png;base64,${country?.flag}`}
                      alt="country flag"
                    />
                    <h4 className="text-2xl font-semibold">{country?.name}</h4>
                  </div>
                ))
              : countries?.map((country) => (
                  <div
                    onClick={() => handleSelectCountry(country)}
                    className="flex items-center gap-4 cursor-pointer hover:bg-gray-300 p-3"
                    key={country?.id}
                  >
                    <img
                      className="w-20 h-12 rounded-lg"
                      src={`data:image/png;base64,${country?.flag}`}
                      alt="country flag"
                    />
                    <h4 className="text-2xl font-semibold">{country?.name}</h4>
                  </div>
                ))}
          </div>
        )}
      </div>
      {/* for smaller devices */}
      <div className="lg:w-2/6 w-full">
        <button
          onClick={handleSearchCountry}
          className={`w-full bg-[#C09D5E] py-2 rounded-full ${
            !searchValue && "cursor-not-allowed"
          }`}
          disabled={!searchValue}
        >
          Search Now
        </button>
      </div>
    </>
  );
};

export default CountrySearchComponent;
