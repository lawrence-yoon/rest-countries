import Moon from "./ui/icons/Moon";
import { MoonSolid } from "./ui/icons/Moon";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row justify-between">
      <h2 className="font-bold p-4">Where in the world?</h2>
      <button className="flex flex-row px-6 py-4 gap-3">
        <Moon />
        <MoonSolid />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
