import { CustomButtonProps } from "../../types";
import { useApp } from "../../hooks";

import { Spinner } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = (props: CustomButtonProps): JSX.Element => {
  if (props.type === "submit") return <Submit {...props} />;
  if (props.type === "externalLink") return <ExternalLink {...props} />;
  return <Button {...props} />;
};

const Submit = ({
  theme,
  disabled,
  icon,
  label,
  title,
}: CustomButtonProps): JSX.Element => {
  const { loading } = useApp();
  return (
    <button
      title={title}
      type="submit"
      className={`${theme.color} lg:hover:bg-opacity-80 
        lg:dark:hover:bg-opacity-80 transition-all ${theme.bg}
        ${theme.aditionalStyles}
        ${disabled ? "bg-opacity-40" : ""}
        focus:ring-4 focus:ring-blue-300 font-medium 
        rounded-lg text-sm px-5 py-5
        focus:outline-none text-[18px] font-poppins cursor-pointer
        lg:rounded-xl lg:text-[20px] flex justify-center items-center gap-3
      `}
      disabled={disabled}
    >
      {icon ? <FontAwesomeIcon icon={icon} className={theme.color} /> : ""}
      {loading.visible ? <Spinner /> : label}
    </button>
  );
};

const Button = ({
  theme,
  disabled,
  label,
  icon,
  title,
  onClick,
}: CustomButtonProps): JSX.Element => {
  return (
    <button
      title={title}
      onClick={onClick}
      type="button"
      className={`${theme.color} lg:hover:bg-opacity-80 
        lg:dark:hover:bg-opacity-80 transition-all ${theme.bg}
        ${theme.aditionalStyles}
        ${disabled ? "bg-opacity-40" : ""}
        font-medium 
        rounded-lg text-sm px-5 py-5
        focus:outline-none text-[18px] font-poppins cursor-pointer
        lg:rounded-xl lg:text-[20px] flex justify-center items-center gap-3
      `}
      disabled={disabled}
    >
      {icon ? <FontAwesomeIcon icon={icon} className={theme.color} /> : ""}
      {label}
    </button>
  );
};

const ExternalLink = ({
  theme,
  label,
  icon,
  externalLink,
  title,
}: CustomButtonProps): JSX.Element => {
  return (
    <a
      title={title}
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${theme.color} lg:hover:bg-opacity-80 lg:dark:hover:bg-opacity-80 transition-all ${theme.bg}
      ${theme.aditionalStyles} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-5 
      focus:outline-none  font-poppins cursor-pointer lg:rounded-xl text-[20px] flex justify-center 
      items-center gap-3`}
    >
      {icon ? <FontAwesomeIcon icon={icon} className={theme.color} /> : ""}
      {label}
    </a>
  );
};

export default CustomButton;
