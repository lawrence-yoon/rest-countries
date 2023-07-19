# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_
- _Bonus_: I have added another route, one that renders a random country details on the page.

### Links

- Solution URL: [frontendmentor](https://www.frontendmentor.io/solutions/rest-countries-api-dark-mode-random-page-localstorage-nextjs-RuEjAMvvjY)
- Live Site URL: [Vercel Deployment](https://rest-countries-beryl-five.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - For styles

## What I learned

### Conditional Rendering

- [stackoverflow](https://stackoverflow.com/questions/76707510/how-do-i-retrieve-data-saved-in-local-storage-from-a-dynamic-route-with-nextjs/76708798#76708798)
  I asked a stackoverflow question that I answered myself after some probing. My localstorage state hook was causing the dynamic route to break, crashing the app. My app at the dynamic route was trying to retrieve data from the client window before it was even rendered in, and caused the crash because it was trying to access properties of an object that has yet to have been retrieved. I was trying to process data that the page was not ready with. See more in the link.

### Select Element

I have provided a link to a stackoverflow solution for this in the "useful resources" section below. Good information regarding the select element and having a hidden disabled option to act as a label.

```js
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
```

### Derived State

See link below for the video. I was having an issue of rendering a list with certain filters applied to it, due to mutating and changing the state, unable to revert it back. this was solved by creating an array with filters applied, and rendering that data, instead of applying the filters to the state itself.

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

### Continued development

I've looked into debounce, throttle, and infinite scroll for this project. However, due to how the app utilizes localstorage, I did not think debouncing was necessary. A separate request is not sent with each key pressed in the input field, and instead an algorithm runs client side on data stored locally. As for the infinite scroll, it is not absolutely necessary and I do not think it would noticably improve performance.

### Useful resources

- [select element](https://stackoverflow.com/questions/26466482/select-selected-label-without-being-an-option) - Good information regarding the select element and having a hidden disabled option to act as a label.
- [derived state](https://youtu.be/E1cklb4aeXA) - Link to video by webdevsimplified on youtube. Kyle does an amazing job explaining the mistake and provides a solution.

## Author

- Website - [lawrence yoon](https://larr.dev)
- Github - [@lawrence-yoon](https://github.com/lawrence-yoon)
- Frontend Mentor - [@lawrence-yoon](https://www.frontendmentor.io/profile/lawrence-yoon)

## Acknowledgments

- Yuri - [@theyurig](https://github.com/TheYuriG)
  I want to thank for keeping me accountable, as well as giving me some pointers, especially for the derived state bug.
