"use client";
import { useRouter } from "next/navigation";
import Moon from "./ui/icons/Moon";
import { MoonSolid } from "./ui/icons/Moon";

function Header({ handleToggle = () => {} }) {
  const router = useRouter();
  function handleRandom() {
    router.push("/country/random");
    window.location.reload();
  }
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 flex flex-row justify-between text-dark-blue-2 bg-white dark:bg-dark-blue-0 dark:text-white">
        <h2 className="font-bold p-4 whitespace-nowrap">Where in the world?</h2>
        {/* {isDarkToggled ? <p>dark on</p> : <p>light on</p>} */}
        <button
          className="flex flex-row px-3 py-4 gap-3 whitespace-nowrap shadow-sm hover:opacity-75 hover:scale-125"
          onClick={handleRandom}
        >
          ?
        </button>
        <button
          className="flex flex-row px-6 py-4 gap-3 whitespace-nowrap shadow-sm hover:opacity-75"
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
