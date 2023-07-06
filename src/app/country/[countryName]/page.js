"use client";

import React, { useState } from "react";

const countriesFromLocalStorage = JSON.parse(localStorage.getItem("data"));

export default function CountryDetailPage({ params }) {
  // console.log(typeof params.countryName);

  const [countries, setCountries] = useState(countriesFromLocalStorage);
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
  console.log(countryDetails);

  const CountryDetailsCard = ({ ...props }) => {
    return (
      <div>
        <button
          className="block border"
          onClick={() => getCountryByName(params.countryName)}
        >
          getcountry by name
        </button>
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
      </div>
    );
  };

  // have a loading state, to hide the processing time for the algorithm
  // fire the algorithm, getCountryByName(params.countryName),
  // render it out. hydrate the loading state ui?

  return (
    <div className="pt-20 p-10">
      <div>CountryDetailPage</div>
      <CountryDetailsCard {...countryDetails} />
    </div>
  );
}
