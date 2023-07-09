helpful links

working with select element, hide option for labeling purposes.
https://stackoverflow.com/questions/26466482/select-selected-label-without-being-an-option

derived state. i was considering the second solution, like kyle does in vid below. considered having like 3 different countries arrays, but thats wasteful.
https://youtu.be/E1cklb4aeXA

```js
function handleSearch(e) {
  const querySearch = e.target.value;
  setSearchField(querySearch);
}
function handleFilter(e) {
  const querySearch = e.target.value;
  setFilterField(querySearch);
}

const filteredCountriesRegion = countries.filter((country) =>
  country.region.toLowerCase().includes(filterField.toLowerCase())
);

const filteredCountries = filteredCountriesRegion.filter((country) =>
  country.name.common.toLowerCase().includes(searchField.toLowerCase())
);
```

and inside the return()

```js
<div className="flex flex-col w-full p-10 gap-6">
  {filteredCountries &&
    filteredCountries.map((country, index) => (
      <CountryCard key={index} data={country} />
    ))}
</div>
```
