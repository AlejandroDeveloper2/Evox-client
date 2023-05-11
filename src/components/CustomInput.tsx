import { useLocation } from "react-router-dom";
import { Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomInputProps } from "../types";
import { useApp } from "../hooks";

const CustomInput = (props: CustomInputProps): JSX.Element => {
  const { field, errors, touched, values } = props;
  const location = useLocation();
  const { countries } = useApp();

  return (
    <div className="flex flex-col gap-2 justify-center items-start w-auto transition-all">
      <label
        htmlFor={field.name}
        className=" font-montserrat text-darkGray dark:text-white font-bold"
      >
        {field.label}
      </label>
      <div
        className={`flex flex-row justify-center w-full items-center border-solid border-[1px] rounded-[10px] overflow-hidden 
        hover:border-darkGray dark:hover:border-primary-color ${
          errors[field.name] && touched[field.name]
            ? "border-error"
            : "border-primary-color"
        }`}
      >
        <span
          className={`flex justify-center items-center py-3 ps-3 h-full bg-white`}
        >
          <FontAwesomeIcon
            icon={field.icon}
            className={`${
              errors[field.name] && touched[field.name]
                ? "text-error"
                : "text-darkGray"
            }`}
          />
        </span>
        {field.as === "select" ? (
          <Field
            as="select"
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            className={`border-none outline-none py-3 px-4 w-full text-[14px] font-poppins ${
              field.disabled && "text-darkGray dark:text-white"
            }`}
            disabled={field.disabled ? field.disabled : false}
            value={
              field.name === "referral"
                ? location.pathname.split("/")[1]
                : values[field.name]
            }
          >
            <option value="">...Select...</option>
            {countries.map((country, i) => (
              <option key={i} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </Field>
        ) : (
          <Field
            as="input"
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            className={`border-none outline-none py-3 px-4 w-full text-[14px] font-poppins ${
              field.disabled && "text-darkGray"
            }`}
            disabled={field.disabled ? field.disabled : false}
            value={
              field.name === "referral"
                ? location.pathname.split("/")[1]
                : values[field.name]
            }
          />
        )}
      </div>
      <ErrorMessage
        name={field.name}
        component="span"
        className="text-error font-poppins font-medium text-[14px]"
      />
    </div>
  );
};

export default CustomInput;
