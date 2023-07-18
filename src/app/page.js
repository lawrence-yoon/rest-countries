"use client";
import useLocalStorage from "@/components/hooks/useLocalStorage";
import useToggle from "@/components/hooks/useToggle";
import CountryCard from "@/components/CountryCard";
import MagnifyingGlass from "@/components/ui/icons/MagnifyingGlass";
import Header from "@/components/Header";
import { FetchDataButton } from "@/components/ui/FetchDataButton";

export default function Home() {
  const [countries, setCountries] = useLocalStorage("data", []);
  const [isDarkToggled, setIsDarkToggled] = useToggle("isDark", false);
  const [searchField, setSearchField] = useLocalStorage("search", "");
  const [filterField, setFilterField] = useLocalStorage("filter", "");

  function handleSearch(e) {
    const querySearch = e.target.value;
    setSearchField(querySearch);
  }
  function handleFilter(e) {
    const querySearch = e.target.value;
    setFilterField(querySearch);
  }
  function handleData(data) {
    setCountries(data);
    localStorage.setItem("data", JSON.stringify(countries));
  }

  const filteredCountriesRegion = countries.filter((country) =>
    country.region.toLowerCase().includes(filterField.toLowerCase())
  );

  const filteredCountries = filteredCountriesRegion.filter((country) =>
    country.name.common.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <main className={`${isDarkToggled ? "dark" : ""}`}>
      <Header handleToggle={setIsDarkToggled} />
      <div className="flex min-h-screen flex-col items-center pt-20 pb-4 bg-light-gray text-dark-blue-2 dark:bg-dark-blue-1 dark:text-white">
        <div className="flex flex-col justify-between w-full px-4 gap-4">
          <div className="flex flex-row border-transparent rounded-lg p-2 text-dark-gray dark:bg-dark-blue-0">
            <MagnifyingGlass className="p-2 px-6" />
            <input
              id="search"
              name="search"
              className="p-2 outline-none flex-grow bg-transparent"
              type="text"
              placeholder="Search for a country..."
              onChange={(e) => handleSearch(e)}
              value={searchField}
            />
          </div>
          <select
            name="filter"
            id="filter"
            className="rounded-lg bg-white w-fit p-4 self-start dark:bg-dark-blue-0"
            onChange={(e) => handleFilter(e)}
          >
            <option className="hidden" value="">
              Filter by Region
            </option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="flex flex-col w-full p-10 gap-6 md:flex-row md:flex-wrap md:justify-center">
          {filteredCountries &&
            filteredCountries.map((country, index) => (
              <CountryCard key={index} data={country} />
            ))}
        </div>
        <FetchDataButton setData={handleData} />
        {/* <p>api endpoint: {apiURL}</p> */}
      </div>
    </main>
  );
}
