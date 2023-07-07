import Image from "next/image";

function CountryCard({ data }) {
  return (
    <div className="border p-4">
      <div className="grid place-content-center">
        <Image
          width={300}
          height={150}
          src={data.flags.svg}
          alt="Picture of country flag"
        />
      </div>
      <p>{data.name.common}</p>
      <p>
        <span>Population: </span>
        {data.population}
      </p>
      <p>
        <span>Region: </span>
        {data.region}
      </p>
      <p>
        <span>Capital: </span>
        {data.capital}
      </p>
    </div>
  );
}

export default CountryCard;
