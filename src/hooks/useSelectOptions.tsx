import React from "react";

import { useApp } from ".";
import { SelectOptionsHook } from "../types";

const useSelectOptions = (
  selectName: "countries" | "cities" | undefined,
  country: string
): SelectOptionsHook => {
  const { countries, cities, getCities } = useApp();

  React.useEffect(() => {
    getCities(country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  const renderSelectOptions = (): JSX.Element[] => {
    const Options: JSX.Element[] =
      selectName === "countries"
        ? countries.map((option, i) => (
            <option
              key={i}
              value={option.name}
              className="text-darkGray dark:text-white font-poppins"
            >
              {option.name}
            </option>
          ))
        : cities.map((option, i) => (
            <option
              key={i}
              value={option.name}
              className="text-darkGray dark:text-white font-poppins"
            >
              {option.name}
            </option>
          ));

    return Options;
  };

  return {
    renderSelectOptions,
  };
};

export default useSelectOptions;
