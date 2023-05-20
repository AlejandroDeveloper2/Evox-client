import { ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomInputProps } from "../../types";

import { CustomSelect, CustomInput } from "..";

const CustomField = (props: CustomInputProps): JSX.Element => {
  const { field, errors, touched } = props;

  return (
    <div className="flex flex-col gap-2 justify-center items-start w-auto max-w-4xl transition-all">
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
          className={`flex justify-center items-center py-3 ps-3 h-full ${
            field.disabled
              ? "bg-primary-color dark:bg-darkGray"
              : "bg-white dark:bg-mediumGray"
          }`}
        >
          <FontAwesomeIcon
            icon={field.icon}
            className={`${
              errors[field.name] && touched[field.name]
                ? "text-error"
                : "text-darkGray dark:text-white"
            }`}
          />
        </span>
        {field.as === "select" ? (
          <CustomSelect {...props} />
        ) : (
          <CustomInput {...props} />
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

export default CustomField;
