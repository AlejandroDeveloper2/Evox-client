import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hooks";

const Toggle = (): JSX.Element => {
  const { toggleTheme } = useTheme();
  return (
    <label className="relative inline-flex items-center cursor-pointer gap-2">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={toggleTheme}
      />
      <div
        className="w-11 h-6 bg-primary-color peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-darkGray  
    rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
    after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 
    after:w-5 after:transition-all peer-checked:bg-secondaryColor"
      ></div>
      <FontAwesomeIcon icon={faSun} className="block text-darkGray lg:hidden" />
      <span className="ml-3 text-sm font-medium text-darkGray font-montserrat hidden md:block">
        Dark theme
      </span>
    </label>
  );
};

export default Toggle;
