import { Field } from "formik";
import { CustomInputProps } from "../../../types";

const CustomInputFile = (props: CustomInputProps): JSX.Element => {
  const { field, values } = props;
  return (
    <Field
      as="input"
      type={field.type}
      placeholder={field.placeholder}
      name={field.name}
      className={`border-none outline-none py-3 px-4 w-full text-[14px] font-poppins ${
        field.disabled && "text-darkGray"
      } dark:bg-mediumGray bg-white dark:placeholder:text-primary-color dark:placeholder:text-opacity-60  dark:text-white`}
      disabled={field.disabled ? field.disabled : false}
      value={values[field.name]}
    />
  );
};

export default CustomInputFile;
