import React, { useState } from "react";

const CountrySearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchCountry = () => {
    console.log("Search for", searchValue);
  };

  return (
    <>
      {/* for larges devices  */}
      <div className="lg:w-4/6 w-full">
        <input
          type="text"
          placeholder="Where do you need data for?"
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
          id="search"
          className="bg-slate-700 w-full text-white lg:mx-3  lg:p-2 px-4 py-2 mb-3 lg:mb-0 lg:rounded-md rounded-full lg:border-0"
        />
      </div>
      {/* for smaller devices  */}
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
