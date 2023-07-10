"use client";

import React, { useState } from "react";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import Header from "@/components/Header";
import useToggle from "@/components/hooks/useToggle";
import CountryDetailsCard from "@/components/CountryDetailsCard";

export default function CountryDetailPage({ params }) {
  // console.log(typeof params.countryName);

  const [countries, setCountries] = useLocalStorage("data", []);
  const [isDarkToggled, setIsDarkToggled] = useToggle("isDark", false);
  const [countryDetails, setCountryDetails] = useState({
    name: "name.common",
    nativeName: "name.nativeName.{kor}.common",
    flag: "flags.svg",
    population: "population",
    region: "region",
    subRegion: "subregion",
    capital: "capital",
    topLevelDomain: "tld",
    currencies: "currencies.{KRW}.name",
    languages: "languages.{kor}",
    borderCountries: "borders",
  });

  // console.log(countries);

  function getCountryByName(query) {
    const data = countries.filter((entry) => entry.name.common == query);
    setCountryDetails(data);
  }
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
      <Header handleToggle={setIsDarkToggled}></Header>
      <CountryDetailsCard params={params.countryName} {...countryDetails} />
    </main>
  );
}
