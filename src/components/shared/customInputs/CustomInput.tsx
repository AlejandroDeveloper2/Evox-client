import { Field } from "formik";
import { useLocation } from "react-router-dom";
import { CustomInputProps } from "../../../types";
import { setInputType } from "../../../utils";

const CustomInput = (props: CustomInputProps) => {
  const { field, values, passVisible } = props;
  const location = useLocation();

  return (
    <Field
      as="input"
      type={setInputType(field.type, passVisible)}
      placeholder={field.placeholder}
      name={field.name}
      className={`border-none outline-none w-full text-[14px] font-poppins ${
        field.disabled ? "bg-disabledColor" : "dark:bg-mediumGray bg-white"
      } dark:placeholder:text-primary-color dark:placeholder:text-opacity-60 text-darkGray dark:text-white`}
      disabled={field.disabled ? field.disabled : false}
      value={
        field.name === "referral"
          ? location.pathname.split("/")[1]
          : values[field.name]
      }
    />
  );
};

export default CustomInput;
