import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { setActiveMenuItem, setMenuItemEnabled } from "../../utils";
import { MenuItem as MenuItemType } from "../../types";
import { useMenuItem } from "../../hooks";

const MenuItem = (props: MenuItemType): JSX.Element => {
  const { leftIcon, rightIcon, label, to, subItems } = props;
  const {
    isSubitemsVisible,
    location,
    setIsSubitemsVisible,
    toggleLateralMenu,
    SubItems,
  } = useMenuItem();

  return (
    <>
      <Link
        to={to}
        className={`flex justify-start items-center gap-5 flex-col rounded-lg px-5 py-4 w-[80%] 
      relative ${setMenuItemEnabled(props.enabled, to, location)}`}
        onClick={() => {
          props.enabled
            ? setIsSubitemsVisible(!isSubitemsVisible)
            : console.log("Blocked");
          props.subItems === undefined ? console.log("") : toggleLateralMenu();
        }}
      >
        <li className="flex flex-row gap-5 w-full">
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
                : "text-mediumGray dark:text-white dark:text-opacity-40"
            }
          />
          <span
            className={`${
              props.enabled
                ? setActiveMenuItem(to, location.pathname)[1]
                : "text-mediumGray dark:text-white dark:text-opacity-40"
            } text-left font-montserrat font-medium lg:block text-[12px]`}
          >
            {label}
          </span>
          {rightIcon && (
            <FontAwesomeIcon
              icon={rightIcon}
              className={`absolute top-4 right-2 ${
                !isSubitemsVisible ? "rotate-[0deg]" : "rotate-90"
              } transition-transform ${
                props.enabled
                  ? "text-darkGray dark:text-white"
                  : "text-mediumGray dark:text-white dark:text-opacity-40"
              }`}
            />
          )}
        </li>
      </Link>
      {subItems && <SubItems {...props} />}
    </>
  );
};

export default MenuItem;
