import React from "react";
import { ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { CustomInputProps } from "../../types";

import { CustomSelect, CustomInput } from "..";
import { useAuth, usePhonecode } from "../../hooks";

const CustomField = (props: CustomInputProps): JSX.Element => {
  const { field, errors, touched } = props;
  const [passVisible, setPassVisible] = React.useState<boolean>(false);
  const { phoneCode, setPhoneCode } = useAuth();
  const { renderPhoneCodes } = usePhonecode();

  return (
    <div className="flex flex-col gap-2 justify-center items-start w-auto transition-all">
      <div
        className={`flex flex-col  justify-center w-full items-start border-solid 
        border-[1px] rounded-[10px] overflow-hidden p-3 gap-1 ${
          field.disabled
            ? "text-darkGray bg-disabledColor dark:bg-darkGray"
            : "dark:bg-mediumGray bg-white"
        }
        hover:border-darkGray dark:hover:border-primary-color ${
          errors[field.name] && touched[field.name]
            ? "border-error"
            : "border-primary-color"
        }`}
      >
        <label
          className={`text-black text-opacity-40 text-left font-poppins font-semibold ${
            field.label ? "block" : "hidden"
          }`}
        >
          {field.label}
        </label>
        <div className="w-full flex flex-row justify-between items-center">
          {field.name === "phone" && (
            <select
              className="outline-none w-[10rem] font-poppins"
              value={phoneCode}
              name="phoneCode"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setPhoneCode(e.target.value)
              }
            >
              {renderPhoneCodes()}
            </select>
          )}
          {field.as === "select" ? (
            <CustomSelect {...props} />
          ) : (
            <CustomInput {...props} passVisible={passVisible} />
          )}
          {field.type === "password" && (
            <FontAwesomeIcon
              icon={passVisible ? faEyeSlash : faEye}
              className="text-darkGray"
              onClick={() => setPassVisible(!passVisible)}
            />
          )}
        </div>
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
