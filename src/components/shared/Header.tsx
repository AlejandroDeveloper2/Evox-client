import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { HeaderProps } from "../../types";

import { Dropdown, Toggle } from "..";

const Header = (props: HeaderProps): JSX.Element => {
  const { pageName } = props;
  return (
    <div
      className="w-screen bg-white dark:bg-darkGray h-[5rem] flex justify-around items-center 
      lg:justify-around lg:px-0 fixed z-20 md:justify-between md:px-10 px-0"
    >
      <h1 className="text-darkGray dark:text-white text-[20px] md:text-[24px] text-center font-montserrat font-bold capitalize">
        {pageName}
      </h1>
      <div className="inline-flex justify-center items-center gap-4 md:gap-10">
        <FontAwesomeIcon
          icon={faBell}
          className="text-darkGray dark:text-white text-[20px]"
        />
        <Dropdown />
        <Toggle />
      </div>
      <div
        className="absolute bottom-0 w-full h-[10px] bg-gradient-to-r from-blue via-purple 
      to-lightBlue dark:to-purple dark:from-white left-0 right-0 m-auto"
      ></div>
    </div>
  );
};

export default Header;
