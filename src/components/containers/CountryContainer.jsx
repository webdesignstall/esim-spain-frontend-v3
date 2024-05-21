import React, { useContext, useEffect, useState } from "react";
import CountryCard from "../cards/CountryCard";
import { CountryContext } from "../../contexts/CountryProvider";

const CountryContainer = ({ limit, filteredCountries }) => {
  const { loading, countries } = useContext(CountryContext);
  return (
    <>
      {loading ? (
        <h4 className="text-xl font-semibold my-10 text-white text-center">
          Countries loading...
        </h4>
      ) : (
        <div className="flex flex-wrap lg:gap-5 gap-2 justify-center">
          {filteredCountries?.length > 0
            ? filteredCountries?.map((country, index) => (
                <CountryCard country={country} key={index} />
              ))
            : countries
                ?.slice(0, limit)
                ?.map((country, index) => (
                  <CountryCard country={country} key={index} />
                ))}
        </div>
      )}
    </>
  );
};

export default CountryContainer;
