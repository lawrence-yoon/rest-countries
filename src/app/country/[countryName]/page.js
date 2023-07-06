import React from "react";

export default function CountryDetailPage({ params }) {
  console.log(params.countryName);

  // have a loading state, to hide the processing time for the algorithm
  // fire the algorithm, getCountryByName(params.countryName),
  // render it out. hydrate the loading state ui?

  return (
    <div className="p-10">
      <div>CountryDetailPage</div>
      <p>{params.countryName}</p>
    </div>
  );
}
