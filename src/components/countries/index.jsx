import { useEffect, useState } from "react";
import CountryContainer from "../containers/CountryContainer";
import CountryFilter from "./CountryFilter";
import { letters } from "../../constants/countryFilter";

const CountryList = ({ countries }) => {
  const [selectedLetters, setSelectedLetters] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (selectedLetters) {
      const [start, end] = selectedLetters?.split("-");
      const startIndex = letters.indexOf(start);
      const endIndex = letters.indexOf(end);
      const filterableLetters = letters?.slice(startIndex, endIndex + 1);
      const filterCountries = countries?.filter((country) =>
        filterableLetters.includes(country?.name?.split("")[0])
      );
      setFilteredCountries(() => filterCountries);
    }
  }, [selectedLetters]);

  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[80%] lg:max-w-[85%] mx-auto xl:px-10 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-96 -mt-20 lg:rounded-3xl relative"
    >
      <CountryFilter
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
      />
      <CountryContainer
        countries={countries}
        filteredCountries={filteredCountries}
      />
    </div>
  );
};

export default CountryList;
