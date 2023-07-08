import Moon from "./ui/icons/Moon";
import { MoonSolid } from "./ui/icons/Moon";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row justify-between border-b">
      <h2 className="font-bold p-4 whitespace-nowrap">Where in the world?</h2>
      <button className="flex flex-row px-6 py-4 gap-3 whitespace-nowrap">
        <Moon />
        <MoonSolid />
        Dark Mode
      </button>
      {/*i think we just add dark:hidden for rendering things or not*/}
    </header>
  );
}

export default Header;
