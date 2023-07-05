"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import CountryCard from "@/components/CountryCard";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    console.log(JSON.stringify(data));
  };

  fetchCountries();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input className="border" type="text"></input>
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
