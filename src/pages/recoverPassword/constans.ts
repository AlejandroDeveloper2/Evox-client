import { faAt } from "@fortawesome/free-solid-svg-icons";
import { NavigateFunction } from "react-router-dom";

import { Field, CustomButtonProps, RecoverPassFormValues } from "../../types";

export const initialvalues: RecoverPassFormValues = {
  email: "",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "email",
    label: "Email *",
    placeholder: "Enter your email",
    icon: faAt,
    as: "input",
  },
];

export const getFormButtons = (
  navigate: NavigateFunction
): CustomButtonProps[] => {
  return [
    {
      type: "submit",
      label: "Send instructions",
      theme: {
        bg: "bg-blue dark:bg-purple",
        color: "text-white",
      },
    },
    {
      type: "button",
      label: "Go back",
      theme: {
        bg: "bg-primary-color",
        color: "text-darkGray",
      },
      onClick: () => navigate("/login"),
    },
  ];
};
