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

findbyname, and sending that as a nicely formatted param so the url does not have spaces. during search algorithm, if i even need one, ...
wait, i can maybe just save data in form of state on click, and it ...
wait, ive already thought of this. algorithm has to search through anyways, no difference if its before the route or after the route. at least aafter route, we can use some kind of loading state.

had an issue with data processing. broke my app when accessing dynamic route. needed conditional rendering. have a post of it up.

debounce. i was learning it, along with throttling and higher order functions. i do not think i need it here. actually, it kinda is cool to see it being changed realtime. i do not think google search even uses debounce. however, i will commit this then try it out.
