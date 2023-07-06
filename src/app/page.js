"use client";
// import Image from "next/image";
import { useState } from "react";
import CountryCard from "@/components/CountryCard";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("search field");
  const [filterField, setFilterField] = useState("filter field");

  function handleSearch() {}
  function handleFilter() {}

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    // console.log(JSON.stringify(data));
  };

  fetchCountries();

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
          onChange={(e) => setSearchField(e.target.value)}
          value={searchField}
        ></input>
        <p>{searchField}</p>
        {/* <label for="filter">Filter</label> */}
        <select
          name="filter"
          id="filter"
          onChange={(e) => setFilterField(e.target.value)}
        >
          <option>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <p>{filterField}</p>
      </div>
      {countries &&
        countries.map((country, index) => (
          <CountryCard key={index} data={country} />
        ))}
      <button className="bg-slate-100 text-black" onClick={fetchCountries}>
        fetch countries
      </button>
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
