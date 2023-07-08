"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import CountryCard from "@/components/CountryCard";
import MagnifyingGlass from "@/components/ui/icons/MagnifyingGlass";

const countriesFromLocalStorage = JSON.parse(localStorage.getItem("data"));

const apiURL = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [countries, setCountries] = useState(countriesFromLocalStorage);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchField, setSearchField] = useState("");
  const [filterField, setFilterField] = useState("");

  // maybe 3 state things. one is original, from local storage. second is filtered countries, with a filter applied by the select handle filter. third is filter applied by search field handle search.
  // my tries at utilizing the useeffect fell short with the handle filter, for some reason it didnt want to cooperate. i think it had something to do with when search field is empty, it sets filtered countries to default of countries.
  // or i make two separete functions. first applies filter field, second applies search field.

  // idea with the three states. a. is og, b. is filtered by region, c. is filtered by region filtered by searchfield. different states will be rendered based on if a field is empty or not. if search field is empty, show filteredfield. if filteredfield is empty, show countries.

  // save most state to local storage, so that when user is routed back to root, previous filters should still be there. i think best way to do that is to put all these state into local storage.

  // concerning these handlers below, i want to look into maybe doing this server side, and just showing the rendered stuff, i beleive this is possible with next13.
  function handleSearch(e) {
    const querySearch = e.target.value;
    const searchArray = filteredCountries.filter((country) =>
      country.name.common.toLowerCase().includes(querySearch.toLowerCase())
    );
    // console.log(searchArray);
    if (!searchArray) {
      setFilteredCountries(countries);
    }
    setFilteredCountries(searchArray);
    setSearchField(querySearch);
  }
  function handleFilter(e) {
    const querySearch = e.target.value;
    const searchArray = countries.filter((country) =>
      country.region.toLowerCase().includes(querySearch.toLowerCase())
    );

    // console.log(searchArray);
    setFilteredCountries(searchArray);
    setFilterField(querySearch);
  }

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
    <main className="flex min-h-screen flex-col items-center pt-20">
      <div className="flex flex-col justify-between w-full px-4">
        {/* my thinking is, mutate the countries array?
        or, create a copy, that renders if searchField exists, and hides the main one, if it doesnt.*/}
        {/* <label for="search">Search</label> */}
        <div className="flex flex-row border rounded-lg p-2">
          <MagnifyingGlass className="p-2 px-6" />
          <input
            id="search"
            name="search"
            className="p-2 outline-none flex-grow"
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => handleSearch(e)}
            value={searchField}
          />
        </div>
        <p>{searchField}</p>
        {/* <label for="filter">Filter</label> */}
        <select name="filter" id="filter" onChange={(e) => handleFilter(e)}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <p>
          {filterField} {filteredCountries.length}
        </p>
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
      <div className="flex flex-col w-full p-10 gap-6">
        {filteredCountries &&
          filteredCountries.map((country, index) => (
            <CountryCard key={index} data={country} />
          ))}
      </div>

      <button className="bg-slate-100 text-black" onClick={fetchCountries}>
        fetch countries
      </button>
      <p>api endpoint: {apiURL}</p>
    </main>
  );
}
