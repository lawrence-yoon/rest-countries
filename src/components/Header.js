"use client";
import Moon from "./ui/icons/Moon";
import { MoonSolid } from "./ui/icons/Moon";
import { useState, useEffect } from "react";

const darkModeToggle = JSON.parse(localStorage.getItem("isDark"));

function Header() {
  const [isDarkToggled, setIsDarkToggled] = useState(darkModeToggle);
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDarkToggled));
  }, [isDarkToggled]);

  function handleDarkModeToggle() {
    setIsDarkToggled((prev) => !prev);
    console.log(darkModeToggle);
  }

  return (
    <header className={`${isDarkToggled ? "dark" : ""}`}>
      <div className="fixed top-0 left-0 right-0 flex flex-row justify-between text-dark-blue-2 bg-white dark:bg-dark-blue-0 dark:text-white">
        <h2 className="font-bold p-4 whitespace-nowrap">Where in the world?</h2>
        {/* {isDarkToggled ? <p>dark on</p> : <p>light on</p>} */}
        <button
          className="flex flex-row px-6 py-4 gap-3 whitespace-nowrap"
          onClick={handleDarkModeToggle}
        >
          <Moon />
          <MoonSolid />
          Dark Mode
        </button>
      </div>
      {/*i think we just add dark:hidden for rendering things or not*/}
    </header>
  );
}

export default Header;
