import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setActiveMenuItem } from "../utils";
import { MenuItem as MenuItemType } from "../types";

const MenuItem = (props: MenuItemType): JSX.Element => {
  const { leftIcon, rightIcon, label, to, subItems } = props;
  const location = useLocation();
  const [isSubitemsVisible, setIsSubitemsVisible] =
    React.useState<boolean>(false);

  const SubItems = (props: MenuItemType): JSX.Element => {
    const { subItems } = props;
    return (
      <ul
        className={`flex-col items-center justify-start gap-1 w-full ${
          !isSubitemsVisible ? "hidden" : "flex"
        } transition-all`}
      >
        {subItems?.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    );
  };

  return (
    <li
      className={`flex justify-center items-center gap-5 flex-col ${
        setActiveMenuItem(to, location.pathname)[0]
      } rounded-lg px-3 py-4 w-[80%] relative hover:bg-primary-color hover:border 
      border-white transition-all cursor-pointer`}
      onClick={() => setIsSubitemsVisible(!isSubitemsVisible)}
    >
      <Link
        to={to}
        className="flex justify-start items-center gap-2 h-full w-full"
      >
        <FontAwesomeIcon
          icon={leftIcon}
          className={setActiveMenuItem(to, location.pathname)[1]}
        />
        <span
          className={`${
            setActiveMenuItem(to, location.pathname)[1]
          } text-left font-montserrat font-medium lg:block text-[12px]`}
        >
          {label}
        </span>
      </Link>
      {rightIcon && (
        <FontAwesomeIcon
          icon={rightIcon}
          className={`absolute top-4 right-2 ${
            !isSubitemsVisible ? "rotate-[0deg]" : "rotate-90"
          } transition-transform text-darkGray dark:text-white`}
        />
      )}
      {subItems && <SubItems {...props} />}
    </li>
  );
};

export default MenuItem;
