import React from "react";

import { useFetchData } from "../hooks";
import {
  AppContextType,
  Country,
  Functions,
  LoaderProps,
  SpinnerProps,
  ToastProps,
  UserIP,
} from "../types";
import { getAllCountries } from "../services/countries";
import { getUserIPAddress } from "../services/userIpAddress";

const AppContext = React.createContext<AppContextType>({} as AppContextType);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AppProvider = ({ children }: Props) => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [userIP, setUserIP] = React.useState<UserIP>({
    ip: "",
    country_name: "",
    browser_name: "",
  });
  const [loading, setLoading] = React.useState<SpinnerProps>({
    message: "",
    visible: false,
  });
  const [toast, setToast] = React.useState<ToastProps>({
    message: "",
    type: "success",
    visible: false,
  });
  const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(false);
  /*Loader props */
  const [isValidating, setIsValidating] = React.useState<boolean>(false);
  const [loader, setLoader] = React.useState<LoaderProps>({
    message: "",
    loading: false,
  });

  const getCountriesData = async () => {
    const countriesData = await getAllCountries();
    setCountries(
      countriesData.sort(function (a, b) {
        return a.name.common
          .toLowerCase()
          .localeCompare(b.name.common.toLowerCase());
      })
    );
  };

  const getUserIPData = async () => {
    const userIPData = await getUserIPAddress();
    setUserIP(userIPData);
  };

  const toggleLateralMenu = (): void => {
    setIsMenuVisible(!isMenuVisible);
  };

  const functions: Functions[] = [
    {
      function: getCountriesData,
    },
    {
      function: getUserIPData,
    },
  ];
  useFetchData(functions);

  return (
    <AppContext.Provider
      value={{
        countries,
        userIP,
        loading,
        toast,
        isMenuVisible,
        isValidating,
        loader,
        setLoading,
        setToast,
        toggleLateralMenu,
        setIsValidating,
        setLoader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider };
export default AppContext;
