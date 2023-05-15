import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../hooks";

const Toggle = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="relative inline-flex items-center cursor-pointer gap-2">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={toggleTheme}
      />
      <div
        className="w-11 h-6 bg-darkGray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
         peer-checked:after:border-white after:content-[''] 
          after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 
          after:w-5 after:transition-all peer-checked:bg-lightBlue border-[2px] border-darkGray dark:border-white"
      ></div>
      <FontAwesomeIcon
        icon={theme === "dark" ? faMoon : faSun}
        className="block text-darkGray dark:text-white lg:hidden"
      />
      <span className="ml-3 text-sm font-medium text-darkGray dark:text-white font-montserrat hidden md:block">
        {theme === "dark" ? "Dark theme" : "Light theme"}
      </span>
    </label>
  );
};

export default Toggle;
