import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { setActiveMenuItem, setMenuItemEnabled } from "../../utils";
import { MenuItem as MenuItemType } from "../../types";
import { useMenuItem } from "../../hooks";

const MenuItem = (props: MenuItemType): JSX.Element => {
  const { rightIcon, label, to, subItems } = props;
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
        className={`flex justify-center items-center gap-5 flex-col px-10 py-5 w-full
        relative ${setMenuItemEnabled(props.enabled, to, location)} relative `}
        onClick={() => {
          props.enabled
            ? setIsSubitemsVisible(!isSubitemsVisible)
            : console.log("Blocked");
          props.subItems === undefined ? console.log("") : toggleLateralMenu();
        }}
      >
        <li className="flex w-[80%] justify-start items-center relative">
          {!props.enabled && (
            <FontAwesomeIcon
              icon={faLock}
              className="text-mediumGray text-[20px] absolute m-auto left-[-30px]"
            />
          )}
          <span
            className={`${
              props.enabled
                ? setActiveMenuItem(to, location.pathname)[1]
                : "text-darkBlue dark:text-white dark:text-opacity-40"
            } text-left font-poppins font-semibold lg:block text-[14px]`}
          >
            {label}
          </span>
          {rightIcon && (
            <FontAwesomeIcon
              icon={rightIcon}
              className={` ${
                !isSubitemsVisible ? "rotate-[0deg]" : "rotate-90"
              } transition-transform ${
                props.enabled
                  ? "text-mediumGray dark:text-white"
                  : "text-gray dark:text-white dark:text-opacity-40"
              } absolute top-0 bottom-0 my-auto right-0`}
            />
          )}
        </li>
        <div className="w-[80%] bg-gray h-[2px] absolute top-[-1px] mx-auto left-0 right-0"></div>
      </Link>
      {subItems && <SubItems {...props} />}
    </>
  );
};

export default MenuItem;
