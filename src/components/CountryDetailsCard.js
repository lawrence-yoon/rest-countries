import Link from "next/link";
import Image from "next/image";

export default function CountryDetailsCard({ params, ...props }) {
  return (
    <div className="flex flex-col gap-4 bg-transparent md:flex-row">
      {props.flag ? (
        <Image
          src={props.flag}
          width={350}
          height={150}
          alt={`${props.alt ? props.alt : "Picture of flag"}`}
        ></Image>
      ) : null}
      <div className="flex flex-col gap-1">
        <p className="font-bold text-2xl">{props.name}</p>
        <p>
          <span className="font-bold">Native Name: </span>
          {props.nativeName}
        </p>
        <p>
          <span className="font-bold">Population: </span>
          {props.population}
        </p>
        <p>
          <span className="font-bold">Region: </span>
          {props.region}
        </p>
        <p>
          <span className="font-bold">Sub Region: </span>
          {props.subRegion}
        </p>
        <p>
          <span className="font-bold">Capital: </span>
          {props.capital}
        </p>
        <p>
          <span className="font-bold">Top Level Domain: </span>
          {props.topLevelDomain}
        </p>
        <p>
          <span className="font-bold">Currencies: </span>
          {props.currencies}
        </p>
        <p>
          <span className="font-bold">Languages: </span>
          {props.languages}
        </p>
        <span className="font-bold">Border Countries: </span>
        <div className="flex flex-row items-center flex-wrap gap-[1rem] pt-2">
          {props.borderCountries
            ? props.borderCountries.map((country, index) => (
                <Link
                  className="px-10 py-1 font-semibold dark:bg-dark-blue-0"
                  key={index}
                  href={`/country/${country.replaceAll(" ", "-")}`}
                >
                  {country}
                </Link>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
