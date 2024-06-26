import React from "react";
import CountryCard from "../cards/CountryCard";

const CountryContainer = ({ filteredCountries, countries }) => {
  return (
    <>
      <div className="flex flex-wrap lg:gap-5 gap-2 justify-center">
        {filteredCountries?.length > 0
          ? filteredCountries?.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))
          : countries?.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
      </div>
    </>
  );
};

export default CountryContainer;
