import { useApp } from ".";
import { SelectOptionsHook } from "../types";
import { identificationOptions } from "../components/shared/customInputs/constans";

const useSelectOptions = (
  selectName: "countries" | "identification" | undefined
): SelectOptionsHook => {
  const { countries } = useApp();

  const renderSelectOptions = (): JSX.Element[] => {
    const Options: JSX.Element[] =
      selectName === "countries"
        ? countries.map((option, i) => (
            <option
              key={i}
              value={option.name.common}
              className="text-darkGray dark:text-white font-poppins"
            >
              {option.name.common}
            </option>
          ))
        : identificationOptions.map((option, i) => (
            <option
              key={i}
              value={option.identification.value}
              className="text-darkGray dark:text-white font-poppins"
            >
              {option.identification.name}
            </option>
          ));

    return Options;
  };

  return {
    renderSelectOptions,
  };
};

export default useSelectOptions;
