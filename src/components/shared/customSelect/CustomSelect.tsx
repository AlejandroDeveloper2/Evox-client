import { Field } from "formik";

import { CustomInputProps } from "../../../types";
import { useSelectOptions } from "../../../hooks";

const CustomSelect = (props: CustomInputProps): JSX.Element => {
  const { field, values } = props;
  const { renderSelectOptions } = useSelectOptions(field.selectName);

  return (
    <Field
      as="select"
      type={field.type}
      placeholder={field.placeholder}
      name={field.name}
      className={`border-none outline-none py-3 px-4 w-full text-[14px] 
            font-poppins bg-white dark:bg-mediumGray text-darkGray dark:text-white`}
      disabled={field.disabled ? field.disabled : false}
      value={values[field.name]}
    >
      <option value="">...Select...</option>
      {renderSelectOptions()}
    </Field>
  );
};

export default CustomSelect;
