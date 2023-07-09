import Image from "next/image";

function CountryCard({ data }) {
  return (
    <div
      className="border-transparent rounded-md dark:bg-dark-blue-0"
      onClick={() => console.log("country card clicked")}
    >
      <div className="grid place-content-center ">
        <Image
          className="rounded-t-md md:rounded-l-md"
          width={300}
          height={150}
          src={data.flags.svg}
          alt="Picture of country flag"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{data.name.common}</h3>
        <p>
          <span className="font-semibold">Population: </span>
          {data.population.toLocaleString("en-US")}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {data.region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {data.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
