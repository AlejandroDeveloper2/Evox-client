import { CustomButtonProps } from "../../types";
import { useApp } from "../../hooks";

import { Spinner } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = (props: CustomButtonProps): JSX.Element => {
  const { loading } = useApp();
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.theme.color} ${
        props.disabled
          ? "bg-blue dark:bg-purple dark:bg-opacity-40 bg-opacity-50"
          : `hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all ${props.theme.bg}`
      } ${props.theme.aditionalStyles}
       focus:ring-4 focus:ring-blue-300 font-medium 
       rounded-lg text-sm px-5 py-5
       focus:outline-none text-[18px] font-poppins cursor-pointer
        lg:rounded-xl lg:text-[20px] flex justify-center items-center gap-3
      `}
      disabled={props.disabled}
    >
      {props.icon && (
        <FontAwesomeIcon icon={props.icon} className={props.theme.color} />
      )}
      {loading.visible && props.type === "submit" ? <Spinner /> : props.label}
    </button>
  );
};

export default CustomButton;
