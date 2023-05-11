import { CustomButtonProps } from "../types";
import { useApp } from "../hooks";

import { Spinner } from ".";

const CustomButton = (props: CustomButtonProps): JSX.Element => {
  const { loading } = useApp();
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.theme.color} ${
        props.disabled
          ? "bg-blue bg-opacity-50"
          : `hover:bg-opacity-80 ${props.theme.bg}`
      } 
       w-full focus:ring-4 focus:ring-blue-300 font-medium 
       rounded-lg text-sm px-5 py-5 mr-2 mb-2 
       focus:outline-none text-[18px] font-poppins cursor-pointer
        lg:rounded-xl lg:text-[20px] flex justify-center items-center gap-3
      `}
      disabled={props.disabled}
    >
      {loading.visible && props.type === "submit" ? <Spinner /> : props.label}
    </button>
  );
};

export default CustomButton;
