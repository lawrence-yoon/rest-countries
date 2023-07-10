import Link from "next/link";

export default function CountryDetailsCard({ params, ...props }) {
  return (
    <div className="pt-20 p-10">
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
      <p>{params}</p>
    </div>
  );
}
