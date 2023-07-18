export const FetchDataButton = ({ setData = () => {} }) => {
  const apiURL = "https://restcountries.com/v3.1/all";
  const fetchCountries = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setData(data);
    // localStorage.setItem("data", JSON.stringify(countries));
  };
  return (
    <button
      className="bg-light-gray text-black p-2 px-4 border-transparent rounded-md hover:border-white dark:text-white dark:bg-dark-blue-0"
      onClick={fetchCountries}
    >
      Fetch Data
    </button>
  );
};
