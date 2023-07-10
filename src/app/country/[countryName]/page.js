"use client";

import React, { useState } from "react";
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
  const countryCode = country.cca3;
  const countryNativeName = Object.values(countryByName[0].name.nativeName);

  function borderCountry(inputString) {
    const countryByCode = countries.filter(
      (item) => item.cca3.toLowerCase() === inputString.toLowerCase()
    );
    const outputString = countryByCode[0].name.common;
    return outputString;
  }

  const countryBorders = country.borders
    ? country.borders.map((border) => borderCountry(border))
    : [];

  const countryCurrencies = Object.values(country.currencies).map(
    (item) => item.name
  );

  const countryLanguages = Object.values(country.languages);

  const countryDetails = {
    name: country.name.common,
    nativeName: countryNativeName[0].common,
    flag: country.flags.svg,
    alt: country.flags.alt,
    population: country.population.toLocaleString("en-US"),
    region: country.region,
    subRegion: country.subregion,
    capital: country.capital,
    //tld, currencies, languages, bordercountries, are arrays.
    topLevelDomain: countryByName[0].tld,
    currencies: countryCurrencies,
    languages: countryLanguages,
    borderCountries: countryBorders,
  };
  // getCountryByName(params.countryName);
  // how is this going to work with countries with a space? perhaps include a - ?
  // gonna be another layer to clean up the query for queries with spaces
  // need to figure out the special keys, like KOR, KRW, kor. first thought, just save the data in json, then when rendering it, do a loop that will render all children, into a string.
  //
  // Object.values()
  // const object1 = {
  //   a: 'somestring',
  //   b: 42,
  //   c: false
  // };
  // console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]

  // have a loading state, to hide the processing time for the algorithm
  // fire the algorithm, getCountryByName(params.countryName),
  // render it out. hydrate the loading state ui?

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
        <CountryDetailsCard params={params.countryName} {...countryDetails} />
      </div>
      {/* <p>{JSON.stringify(countryByName)}</p> */}
    </main>
  );
}
