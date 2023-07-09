"use client";

import React, { useState } from "react";
import Link from "next/link";
import useLocalStorage from "@/components/hooks/useLocalStorage";

export default function CountryDetailPage({ params }) {
  // console.log(typeof params.countryName);

  const [countries, setCountries] = useLocalStorage("data", []);
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

  console.log(countries);

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

  console.log(countryDetails);

  const CountryDetailsCard = ({ ...props }) => {
    return (
      <div>
        <Link
          className="bg-slate-500 p-2 px-4 border-transparent rounded-md"
          href="/"
        >
          &lt; Back
        </Link>

        {/* <button
          className="block border"
          onClick={() => getCountryByName(params.countryName)}
        >
          getcountry by name
        </button> */}
        {/* <p>{params.countryName}</p> */}
        <span>{props.flag}</span>
        <p>{props.name}</p>
        <p>{props.nativeName}</p>
        <p>{props.population}</p>
        <p>{props.region}</p>
        <p>{props.subRegion}</p>
        <p>{props.capital}</p>
        <p>{props.topLevelDomain}</p>
        <p>{props.currencies}</p>
        <p>{props.languages}</p>
        <p>{props.borderCountries}</p>
        <p>{params.countryName}</p>
      </div>
    );
  };

  // have a loading state, to hide the processing time for the algorithm
  // fire the algorithm, getCountryByName(params.countryName),
  // render it out. hydrate the loading state ui?

  return (
    <div className="pt-20 p-10">
      <CountryDetailsCard {...countryDetails} />
    </div>
  );
}
