import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, LoginFormValues } from "../../types";

export const initialvalues: LoginFormValues = {
  email: "",
  password: "",
  ipAddress: "",
  country: "",
  browser: "",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "email",
    placeholder: "Ingresa tu correo electrónico",
    icon: faAt,
    as: "input",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Ingresa tu contraseña",
    icon: faLock,
    as: "input",
  },
];

export const buttons: CustomButtonProps[] = [
  {
    type: "submit",
    label: "Acceder",
    theme: {
      bg: "bg-blue dark:bg-purple",
      color: "text-white",
    },
  },
];
