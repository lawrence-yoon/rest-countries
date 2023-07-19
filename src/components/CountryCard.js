import Image from "next/image";
import Link from "next/link";

function CountryCard({ data }) {
  return (
    <Link href={`/country/${data.name.common.replaceAll(" ", "-")}`}>
      <div
        className="flex flex-col w-[300px] transition-transform border-transparent rounded-md h-full justify-between md:hover:-translate-y-1 md:hover:scale-105 dark:bg-dark-blue-0"
        onClick={() => console.log("country card clicked")}
      >
        <div className="grid place-content-center">
          <Image
            className="rounded-t-md"
            width={300}
            height={150}
            src={data.flags.svg ? data.flags.svg : data.flags.png}
            alt={`${data.flags.alt ? data.flags.alt : "Picture of flag"}`}
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
    </Link>
  );
}

export default CountryCard;
