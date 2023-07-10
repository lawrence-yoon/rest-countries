"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import useToggle from "@/components/hooks/useToggle";
import CountryCard from "@/components/CountryCard";
import MagnifyingGlass from "@/components/ui/icons/MagnifyingGlass";
import Header from "@/components/Header";

const apiURL = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [countries, setCountries] = useLocalStorage("data", []);
  const [isDarkToggled, setIsDarkToggled] = useToggle("isDark", false);
  const [searchField, setSearchField] = useState("");
  const [filterField, setFilterField] = useState("");

  // i think this page component does not know when the isdark is toggled. how can i make it so that i dont have to use layout as client for the usestate...
  // maybe make some wrapper component, that has the state within it, and allows children. plan is to wrap it around both header and main.
  // if this works, i can remove the unnecessary divs added for formating and darkmode. i cant have dark activated and have a dark: conditional within the same element classname string.

  // save most state to local storage, so that when user is routed back to root, previous filters should still be there. i think best way to do that is to put all these state into local storage.

  // concerning these handlers below, i want to look into maybe doing this server side, and just showing the rendered stuff, i beleive this is possible with next13.

  // literally just fixed it with some lines. amazing. thanks kyle aka webdevsimplified
  function handleSearch(e) {
    const querySearch = e.target.value;
    setSearchField(querySearch);
  }
  function handleFilter(e) {
    const querySearch = e.target.value;
    setFilterField(querySearch);
  }

  const filteredCountriesRegion = countries.filter((country) =>
    country.region.toLowerCase().includes(filterField.toLowerCase())
  );

  const filteredCountries = filteredCountriesRegion.filter((country) =>
    country.name.common.toLowerCase().includes(searchField.toLowerCase())
  );

  const fetchCountries = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setCountries(data);
    localStorage.setItem("data", JSON.stringify(countries));
    // console.log(JSON.stringify(data));
  };

  // useEffect(() => {

  // }, [searchField, filterField]);

  return (
    <main className={`${isDarkToggled ? "dark" : ""}`}>
      <Header handleToggle={setIsDarkToggled} />

      <div className="flex min-h-screen flex-col items-center pt-20 bg-light-gray text-dark-blue-2 dark:bg-dark-blue-1 dark:text-white">
        <div className="flex flex-col justify-between w-full px-4 gap-4">
          {/* my thinking is, mutate the countries array?
        or, create a copy, that renders if searchField exists, and hides the main one, if it doesnt.*/}
          {/* <label for="search">Search</label> */}
          <div className="flex flex-row border-transparent rounded-lg p-2 text-dark-gray dark:bg-dark-blue-0">
            <MagnifyingGlass className="p-2 px-6" />
            <input
              id="search"
              name="search"
              className="p-2 outline-none flex-grow bg-transparent"
              type="text"
              placeholder="Search for a country..."
              onChange={(e) => handleSearch(e)}
              value={searchField}
            />
          </div>
          {/* <p>{searchField}</p> */}
          {/* <label for="filter">Filter</label> */}
          <select
            name="filter"
            id="filter"
            className="rounded-lg bg-white w-fit p-4 self-start dark:bg-dark-blue-0"
            onChange={(e) => handleFilter(e)}
          >
            <option className="hidden" value="">
              Filter by Region
            </option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          {/* <p>
          {filterField} {filteredCountries.length}
        </p> */}
        </div>
        {/* {filteredCountries.length != 0 ? (
        <>
          {filteredCountries &&
            filteredCountries.map((country, index) => (
              <CountryCard key={index} data={country} />
            ))}
        </>
      ) : (
        <>
          {countries &&
            countries.map((country, index) => (
              <CountryCard key={index} data={country} />
            ))}
        </>
      )} */}
        <div className="flex flex-col w-full p-10 gap-6 md:flex-row md:flex-wrap md:justify-center">
          {filteredCountries &&
            filteredCountries.map((country, index) => (
              <CountryCard key={index} data={country} />
            ))}
        </div>
        <button className="bg-slate-500 text-black" onClick={fetchCountries}>
          fetch countries
        </button>
        <p>api endpoint: {apiURL}</p>
      </div>
    </main>
  );
}
