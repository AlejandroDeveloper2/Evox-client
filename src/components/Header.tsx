import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { HeaderProps } from "../types";

import { Dropdown, Toggle } from ".";

const Header = (props: HeaderProps): JSX.Element => {
  const { pageName } = props;
  return (
    <div className="w-screen bg-white h-[5rem] flex justify-around items-center fixed z-10">
      <h1 className="text-darkGray text-[20px] md:text-[24px] text-center font-montserrat font-bold">
        {pageName}
      </h1>
      <div className="inline-flex justify-center items-center gap-4">
        <FontAwesomeIcon icon={faBell} className="text-darkGray text-[20px]" />
        <Dropdown />
        <Toggle />
      </div>
      <div className="absolute bottom-0 w-full h-[10px] bg-gradient-to-r from-blue via-purple to-lightBlue"></div>
    </div>
  );
};

export default Header;
