"use client";

import React from "react";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import Header from "@/components/Header";
import useToggle from "@/components/hooks/useToggle";
import CountryDetailsCard from "@/components/CountryDetailsCard";
import Link from "next/link";

export default function CountryDetailPage({ params }) {
  // console.log(typeof params.countryName);

  const [countries, setCountries] = useLocalStorage("data", []);
  const [isDarkToggled, setIsDarkToggled] = useToggle("isDark", false);

  const countryNameWithSpaces = params.countryName.replaceAll("-", " ");
  const countryByName = countries.filter(
    (country) =>
      country.name.common.toLowerCase() === countryNameWithSpaces.toLowerCase()
  );
  const country = countryByName[0];
  // const countryCode = country.cca3;
  // const countryNativeName = country.name.nativeName
  //   ? Object.values(country.name.nativeName)
  //   : null;

  // function borderCountry(inputString) {
  //   const countryByCode = countries.filter(
  //     (item) => item.cca3.toLowerCase() === inputString.toLowerCase()
  //   );
  //   const outputString = countryByCode[0].name.common;
  //   return outputString;
  // }

  // const countryBorders = country.borders
  //   ? country.borders.map((border) => borderCountry(border))
  //   : [];

  // const countryCurrencies = country.currencies
  //   ? Object.values(country.currencies).map((item) => item.name)
  //   : null;

  // const countryLanguages = country.languages
  //   ? Object.values(country.languages)
  //   : null;

  // const countryDetails = {
  //   name: country.name.common,
  //   nativeName: countryNativeName ? countryNativeName[0].common : null,
  //   flag: country.flags.svg,
  //   alt: country.flags.alt,
  //   population: country.population.toLocaleString("en-US"),
  //   region: country.region,
  //   subRegion: country.subregion,
  //   capital: country.capital,
  //   //tld, currencies, languages, bordercountries, are arrays.
  //   topLevelDomain: countryByName[0].tld,
  //   currencies: countryCurrencies,
  //   languages: countryLanguages,
  //   borderCountries: countryBorders,
  // };

  return (
    <main className={`${isDarkToggled ? "dark" : ""}`}>
      <Header handleToggle={setIsDarkToggled} />
      <div className="flex flex-col gap-4 px-8 pt-20 pb-4 dark:text-white dark:bg-dark-blue-1 min-h-screen">
        <Link
          className="w-fit p-2 px-4 border-transparent rounded-md dark:bg-dark-blue-0"
          href="/"
        >
          &lt; Back
        </Link>
        {/* <CountryDetailsCard {...countryDetails} /> */}
        <p>{country ? JSON.stringify(country) : "problem"}</p>
      </div>
    </main>
  );
}
