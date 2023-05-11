import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { menuItems } from "./constans";
import { useApp } from "../../hooks";

import { Avatar, MenuItem } from "..";
import Logo from "../../assets/logo.png";

const LateralMenu = (): JSX.Element => {
  const { isMenuVisible, toggleLateralMenu } = useApp();
  return (
    <nav
      id="nav"
      className={`w-[60%] h-full flex flex-col justify-start items-center transition-transform 
       ${
         isMenuVisible ? "translate-x-0" : "translate-x-[-100%]"
       } lg:translate-x-0
      bg-primary-color py-5 gap-5 lg:w-1/5 fixed top-[5rem] left-0 lg:relative lg:top-0`}
    >
      <button
        className="absolute right-[-2.5rem] top-0 w-10 h-10 bg-primary-color rounded-e-lg lg:hidden"
        onClick={toggleLateralMenu}
      >
        <FontAwesomeIcon
          icon={isMenuVisible ? faClose : faBars}
          className="text-darkGray"
        />
      </button>
      <div className="w-full h-[5rem] flex justify-center items-center">
        <img
          src={Logo}
          alt="EVOX-LOGO"
          className="w-[150px] h-[150px] animate-move-right object-contain"
        />
      </div>
      <Avatar />
      <ul className="flex flex-col items-center justify-start gap-3 w-full overflow-y-scroll h-[50%] lg:h-auto">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </ul>
    </nav>
  );
};

export default LateralMenu;
