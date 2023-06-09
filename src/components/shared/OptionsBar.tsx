import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Dropdown } from "..";

import { TopBanner } from "../../assets";

const OptionsBar = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full pt-5 bg-white gap-4">
      <div className="inline-flex justify-end items-center gap-4 md:gap-10 w-full">
        <FontAwesomeIcon
          icon={faBell}
          className="text-mediumGray dark:text-white text-[20px]"
        />
        <Dropdown />
      </div>
      {/* <Toggle /> */}
      <div className="w-full h-[7rem] md:h-[14rem]">
        <img
          src={TopBanner}
          alt="Evox banner"
          className="object-contain md:object-fill w-full h-full"
        />
      </div>
    </div>
  );
};

export default OptionsBar;
