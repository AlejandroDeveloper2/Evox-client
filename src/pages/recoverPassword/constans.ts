import { faAt } from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, RecoverPassFormValues } from "../../types";

export const initialvalues: RecoverPassFormValues = {
  email: "",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "email",
    placeholder: "Enter your email",
    icon: faAt,
    as: "input",
  },
];

export const getFormButtons = (): CustomButtonProps[] => {
  return [
    {
      type: "submit",
      label: "Send instructions",
      theme: {
        bg: "bg-blue dark:bg-purple",
        color: "text-white",
      },
    },
  ];
};
