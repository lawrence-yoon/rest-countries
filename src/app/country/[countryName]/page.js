"use client";

import React, { useEffect } from "react";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import Header from "@/components/Header";
import useToggle from "@/components/hooks/useToggle";
import CountryDetailsCard from "@/components/CountryDetailsCard";
import Link from "next/link";
import { FetchDataButton } from "@/components/ui/FetchDataButton";

export default function CountryDetailPage({ params }) {
  const [countries, setCountries] = useLocalStorage("data", []);
  const [isDarkToggled, setIsDarkToggled] = useToggle("isDark", false);

  function handleData(data) {
    setCountries(data);
    localStorage.setItem("data", JSON.stringify(countries));
  }

  const countryNameWithSpaces = params.countryName.replaceAll("-", " ");
  const countryByName = countries.filter(
    (country) =>
      country.name.common.toLowerCase() === countryNameWithSpaces.toLowerCase()
  );
  const country = countryByName[0];
  // const countryCode = country.cca3;
  const countryNativeName =
    country && country.name.nativeName
      ? Object.values(country.name.nativeName)
      : null;

  function borderCountry(inputString) {
    const countryByCode = countries.filter(
      (item) => item.cca3.toLowerCase() === inputString.toLowerCase()
    );
    const outputString = countryByCode[0].name.common;
    return outputString;
  }

  const countryBorders =
    country && country.borders
      ? country.borders.map((border) => borderCountry(border))
      : [];

  const countryCurrencies =
    country && country.currencies
      ? Object.values(country.currencies).map((item) => item.name + " ")
      : [];

  const countryLanguages =
    country && country.languages
      ? Object.values(country.languages).map((item) => item + " ")
      : [];

  const countryDetails = {
    name: country ? country.name.common : null,
    nativeName: countryNativeName ? countryNativeName[0].common : null,
    flag: country ? country.flags.svg : null,
    alt: country ? country.flags.alt : null,
    population: country ? country.population.toLocaleString("en-US") : null,
    region: country ? country.region : null,
    subRegion: country ? country.subregion : null,
    capital: country ? country.capital : null,
    //tld, currencies, languages, bordercountries, are arrays.
    topLevelDomain: country ? country.tld[0] : null,
    currencies: countryCurrencies,
    languages: countryLanguages,
    borderCountries: countryBorders,
  };

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
        {countryDetails ? (
          <CountryDetailsCard {...countryDetails} />
        ) : (
          <p>problem</p>
        )}
        <p>{country ? null : <FetchDataButton setData={handleData} />}</p>
      </div>
    </main>
  );
}
