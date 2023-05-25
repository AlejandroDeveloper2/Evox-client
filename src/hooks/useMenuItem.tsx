import React from "react";
import { useLocation } from "react-router-dom";

import { useApp } from ".";
import { MenuItem as MenuItemType } from "../types";

import { MenuItem } from "../components";

const useMenuItem = () => {
  const [isSubitemsVisible, setIsSubitemsVisible] =
    React.useState<boolean>(false);
  const { toggleLateralMenu } = useApp();
  const location = useLocation();

  const SubItems = (props: MenuItemType): JSX.Element => {
    const { subItems } = props;
    return (
      <ul
        className={`flex-col items-center justify-start gap-1 w-[100%] bg-white dark:bg-mediumGray py-0 ${
          !isSubitemsVisible ? "hidden" : "flex"
        } transition-all`}
      >
        {subItems?.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    );
  };

  return {
    isSubitemsVisible,
    location,
    setIsSubitemsVisible,
    toggleLateralMenu,
    SubItems,
  };
};

export default useMenuItem;
