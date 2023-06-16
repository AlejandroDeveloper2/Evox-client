import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import { getBannerImg } from "../../utils";
import { useScreen } from "../../hooks";

import { Carousel, Dropdown } from "..";

const OptionsBar = (): JSX.Element => {
  const location = useLocation();
  const screenSize = useScreen();
  const path = location.pathname.split("/")[2];
  const condition =
    path === "bridgeMarkets" ||
    path === "evoxSynthetics" ||
    path === "automaticTrading" ||
    path === "bridgeFunds";

  const banner = getBannerImg(screenSize, path);

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
      <div className="w-full h-auto relative">
        {condition ? (
          <img
            src={banner}
            alt={`Evox banner ${path}`}
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <Carousel />
        )}
      </div>
    </div>
  );
};

export default OptionsBar;
