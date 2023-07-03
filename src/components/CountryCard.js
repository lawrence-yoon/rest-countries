function CountryCard({ data }) {
  return (
    <div className="bg-white">
      <span>{data.flag}</span>
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
