import React from "react";

import { useFetchData, usePage } from "../hooks";
import {
  AppContextType,
  City,
  Country,
  Functions,
  SpinnerProps,
  ToastProps,
  UserIP,
} from "../types";
import { getAllCountries, getCitiesPerCountry } from "../services/countries";
import { getUserIPAddress } from "../services/userIpAddress";

const AppContext = React.createContext<AppContextType>({} as AppContextType);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AppProvider = ({ children }: Props) => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [cities, setCities] = React.useState<City[]>([]);
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
  const page = usePage();

  const getCountriesData = async () => {
    const countriesData = await getAllCountries();
    setCountries(
      countriesData.sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      })
    );
  };

  const getCities = async (country: string) => {
    const citiesData = await getCitiesPerCountry(country);
    setCities(
      citiesData.sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
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
        cities,
        userIP,
        loading,
        toast,
        isMenuVisible,
        page,
        setLoading,
        setToast,
        toggleLateralMenu,
        getCities,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider };
export default AppContext;
