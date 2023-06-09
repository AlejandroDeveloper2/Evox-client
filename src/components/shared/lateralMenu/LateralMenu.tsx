import { getMenuItems } from "./constans";
import { useApp, useAuth, useTheme } from "../../../hooks";

import { Avatar, MenuItem } from "../..";
import Logo from "../../../assets/images/logo.png";
import LogoDark from "../../../assets/images/logo-2.png";

interface LateralmenuProps {
  colspan: string;
}

const LateralMenu = (props: LateralmenuProps): JSX.Element => {
  const { isMenuVisible } = useApp();
  const { logOut, auth } = useAuth();
  const { theme } = useTheme();

  const menuItems = getMenuItems(
    auth ? auth.roles[0] : { authority: "ROLE_USER" }
  );

  return (
    <nav
      id="nav"
      className={`w-3/4 md:w-[40%] lg:w-full h-full flex flex-col justify-start items-center transition-transform ${
        props.colspan
      }
       ${
         isMenuVisible
           ? "translate-x-0 lg:translate-x-0"
           : "translate-x-[-100%] lg:translate-x-0"
       } 
       bg-white dark:bg-mediumGray py-5 gap-0 lg:gap-5 fixed top-[0] left-0 lg:relative lg:top-0 z-30 lg:z-10`}
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
