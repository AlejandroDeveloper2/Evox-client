import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { menuItems } from "./constans";
import { useApp, useAuth, useTheme } from "../../../hooks";

import { Avatar, MenuItem } from "../..";
import Logo from "../../../assets/logo.png";
import LogoDark from "../../../assets/logo-2.png";

const LateralMenu = (): JSX.Element => {
  const { isMenuVisible } = useApp();
  const { logOut } = useAuth();
  const { theme } = useTheme();

  return (
    <nav
      id="nav"
      className={`w-[60%] h-full flex flex-col justify-start items-center transition-transform 
       ${
         isMenuVisible
           ? "translate-x-0 xl:translate-x-0"
           : "translate-x-[-100%] xl:translate-x-0"
       } 
      bg-primary-color dark:bg-mediumGray py-5 gap-5 xl:w-1/5 md:w-[40%] lg:w-1/4 fixed top-[0] left-0 xl:relative xl:top-0 z-20 xl:z-10`}
    >
      <div className="w-full h-[5rem] flex justify-center items-center">
        <img
          src={theme === "light" ? Logo : LogoDark}
          alt="EVOX-LOGO"
          className="w-[150px] h-[150px] animate-move-right object-contain"
        />
      </div>
      <Avatar haslink />
      <ul className="flex flex-col items-center justify-start gap-3 w-full overflow-y-scroll lg:overflow-y-auto h-auto">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
        <button
          onClick={logOut}
          className="w-[80%] text-darkGray dark:text-white font-montserrat font-bold border-[2px] 
          border-darkGray dark:border-white py-3 rounded-lg flex flex-row items-center justify-center gap-3
           hover:border-purple transition-all dark:hover:border-lightBlue hover:text-purple dark:hover:text-lightBlue"
        >
          <FontAwesomeIcon
            icon={faPowerOff}
            className="text-darkGray dark:text-white text-[20px] hover:text-purple dark:hover:text-lightBlue"
          />
          Exit
        </button>
      </ul>
    </nav>
  );
};

export default LateralMenu;
