"use client";
import Moon from "./ui/icons/Moon";
import { MoonSolid } from "./ui/icons/Moon";

function Header({ handleToggle = () => {} }) {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 flex flex-row justify-between text-dark-blue-2 bg-white dark:bg-dark-blue-0 dark:text-white">
        <h2 className="font-bold p-4 whitespace-nowrap">Where in the world?</h2>
        {/* {isDarkToggled ? <p>dark on</p> : <p>light on</p>} */}
        <button
          className="flex flex-row px-1 mx-4 py-1 my-3 gap-3 whitespace-nowrap shadow-sm border border-b-2 border-dark-blue-0 rounded-md hover:border-dark-gray hover:text-dark-gray dark:border-light-gray dark:text-light-gray dark:hover:border-dark-gray dark:hover:text-dark-gray"
          onClick={handleToggle}
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
