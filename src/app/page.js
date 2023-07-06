"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import CountryCard from "@/components/CountryCard";

const countriesFromLocalStorage = JSON.parse(localStorage.getItem("data"));

const apiURL = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [countries, setCountries] = useState(countriesFromLocalStorage);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchField, setSearchField] = useState("");
  const [filterField, setFilterField] = useState("");

  // save most state to local storage, so that when user is routed back to root, previous filters should still be there. i think best way to do that is to put all these state into local storage.

  // concerning these handlers below, i want to look into maybe doing this server side, and just showing the rendered stuff, i beleive this is possible with next13.
  function handleSearch(e) {
    const querySearch = e.target.value;
    const searchArray = filteredCountries.filter((country) =>
      country.name.common.toLowerCase().includes(querySearch.toLowerCase())
    );

    // console.log(searchArray);
    setFilteredCountries(searchArray);
    setSearchField(querySearch);
  }
  function handleFilter(e) {
    const querySearch = e.target.value;
    const searchArray = filteredCountries.filter((country) =>
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
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col justify-between mx-auto border">
        {/* my thinking is, mutate the countries array?
        or, create a copy, that renders if searchField exists, and hides the main one, if it doesnt.*/}
        {/* <label for="search">Search</label> */}
        <input
          id="search"
          name="search"
          className="border"
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e)}
          value={searchField}
        ></input>
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
        <p>{filterField}</p>
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
      {filteredCountries &&
        filteredCountries.map((country, index) => (
          <CountryCard key={index} data={country} />
        ))}

      <button className="bg-slate-100 text-black" onClick={fetchCountries}>
        fetch countries
      </button>
      <p>api endpoint: {apiURL}</p>
    </main>
  );
}

// export function CountryCard({ data }) {
//   return (
//     <>
//       <span>{data.flag}</span>
//       <p>{data.name.common}</p>
//       <p>
//         <span>Population: </span>
//         {data.population}
//       </p>
//       <p>
//         <span>Region: </span>
//         {data.region}
//       </p>
//       <p>
//         <span>Capital: </span>
//         {data.capital}
//       </p>
//     </>
//   );
// }
