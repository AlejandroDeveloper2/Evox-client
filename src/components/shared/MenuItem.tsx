import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { setActiveMenuItem } from "../../utils";
import { MenuItem as MenuItemType } from "../../types";

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
      className={`flex justify-center items-center gap-5 flex-col rounded-lg px-3 py-4 w-[80%] 
      relative ${
        props.enabled && "hover:bg-opacity-40 dark:hover:bg-opacity-40"
      }  transition-all cursor-pointer ${
        !props.enabled
          ? "bg-black bg-opacity-30"
          : setActiveMenuItem(to, location.pathname)[0]
      } `}
      onClick={() => {
        props.enabled
          ? setIsSubitemsVisible(!isSubitemsVisible)
          : console.log("Blocked");
      }}
    >
      <Link
        to={to}
        className="flex justify-start items-center gap-2 h-full w-full relative"
      >
        {!props.enabled && (
          <FontAwesomeIcon
            icon={faLock}
            className="text-white text-[20px] absolute m-auto left-0 right-0"
          />
        )}
        <FontAwesomeIcon
          icon={leftIcon}
          className={
            props.enabled
              ? setActiveMenuItem(to, location.pathname)[1]
              : "text-mediumGray"
          }
        />
        <span
          className={`${
            props.enabled
              ? setActiveMenuItem(to, location.pathname)[1]
              : "text-mediumGray"
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
          } transition-transform ${
            props.enabled ? "text-darkGray dark:text-white" : "text-mediumGray"
          }`}
        />
      )}
      {subItems && <SubItems {...props} />}
    </li>
  );
};

export default MenuItem;
