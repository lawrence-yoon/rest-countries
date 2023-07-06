"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import CountryCard from "@/components/CountryCard";

const countriesFromLocalStorage = JSON.parse(localStorage.getItem("data"));

const apiURL = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [countries, setCountries] = useState(countriesFromLocalStorage);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterField, setFilterField] = useState("");

  // save most state to local storage, so that when user is routed back to root, previous filters should still be there. i think best way to do that is to put all these state into local storage.

  // concerning these handlers below, i want to look into maybe doing this server side, and just showing the rendered stuff, i beleive this is possible with next13.
  function handleSearch(e) {
    //this is where we use an algorithm to create a copy of countries and filter out show results dynamically, like if you start typing "america", it will show like all countries with a, then am, then ame, etc.
    const query = e.target.value;
    const resultsArray = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    // console.log(resultsArray);
    setFilteredCountries(resultsArray);
    setSearchField(query);
  }
  function handleFilter(e) {
    //this is where we use an algorithm, using the same copy array we use from handleSearch, to apply another layer of filter. so like this one is for region, and we can employ handlesearch on top of the handlefilter.
    setFilterField(e.target.value);
  }

  const fetchCountries = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setCountries(data);
    localStorage.setItem("data", JSON.stringify(countries));
    // console.log(JSON.stringify(data));
  };

  useEffect(() => {
    // handleSearch(searchField);
  }, [searchField, filterField]);

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
          <option>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <p>{filterField}</p>
      </div>
      {filteredCountries.length != 0 ? (
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
      )}

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
