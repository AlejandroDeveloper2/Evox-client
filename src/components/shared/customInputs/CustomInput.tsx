import { Field } from "formik";
import { useLocation } from "react-router-dom";
import { CustomInputProps } from "../../../types";

const CustomInput = (props: CustomInputProps) => {
  const { field, values } = props;
  const location = useLocation();
  return (
    <Field
      as="input"
      type={field.type}
      placeholder={field.placeholder}
      name={field.name}
      className={`border-none outline-none py-3 px-4 w-full text-[14px] font-poppins ${
        field.disabled
          ? "text-darkGray bg-primary-color dark:bg-darkGray"
          : "dark:bg-mediumGray bg-white"
      } dark:placeholder:text-primary-color dark:placeholder:text-opacity-60  dark:text-white`}
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
