"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    console.log(JSON.stringify(data));
  };

  // fetchCountries();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {countries &&
        countries.map((country, index) => (
          <p key={index}>{country.name.common}</p>
        ))}
      <button className="bg-slate-100 text-black" onClick={fetchCountries}>
        fetch countries
      </button>
    </main>
  );
}
