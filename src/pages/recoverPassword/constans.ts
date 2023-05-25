import { faAt } from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, RecoverPassFormValues } from "../../types";

export const initialvalues: RecoverPassFormValues = {
  email: "",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "email",
    placeholder: "Ingresa tu correo electrónico",
    icon: faAt,
    as: "input",
  },
];

export const getFormButtons = (): CustomButtonProps[] => {
  return [
    {
      type: "submit",
      label: "Enviar correo electrónico de recuperación",
      theme: {
        bg: "bg-blue dark:bg-purple",
        color: "text-white",
      },
    },
  ];
};
