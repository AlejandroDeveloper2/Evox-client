import { menuItems } from "./constans";
import { useApp, useAuth, useTheme } from "../../../hooks";

import { Avatar, MenuItem } from "../..";
import Logo from "../../../assets/images/logo.png";
import LogoDark from "../../../assets/images/logo-2.png";

const LateralMenu = (): JSX.Element => {
  const { isMenuVisible } = useApp();
  const { logOut } = useAuth();
  const { theme } = useTheme();

  return (
    <nav
      id="nav"
      className={` w-[75%] lg:w-[60%] h-full flex flex-col justify-start items-center transition-transform 
       ${
         isMenuVisible
           ? "translate-x-0 xl:translate-x-0"
           : "translate-x-[-100%] xl:translate-x-0"
       } 
       bg-white dark:bg-mediumGray py-5 gap-0 lg:gap-5 xl:w-[30%] md:w-[40%] lg:w-1/4 fixed top-[0] left-0 xl:relative xl:top-0 z-20 xl:z-10`}
    >
      <div className="w-full md:h-[5rem] h-[3rem] flex justify-center items-center">
        <img
          src={theme === "light" ? Logo : LogoDark}
          alt="EVOX-LOGO"
          className="w-[150px] h-[150px] animate-move-right object-contain"
        />
      </div>
      <Avatar />
      <ul
        className="flex flex-col items-center justify-start gap-0 w-full overflow-y-scroll 
        lg:overflow-y-auto h-auto bg-primary-color lg:py-10"
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
        <button
          onClick={logOut}
          className="w-full text-darkBlue dark:text-white font-poppins font-semibold py-3 flex items-center justify-start gap-3 px-[4.5rem]
          transition-all bg-gray text-[16px]"
        >
          Salir
        </button>
      </ul>
    </nav>
  );
};

export default LateralMenu;
