import { faLock } from "@fortawesome/free-solid-svg-icons";

import {
  Field,
  CustomButtonProps,
  ChangePasswordFormValues,
} from "../../types";

export const initialvalues: ChangePasswordFormValues = {
  password: "",
  confirmPassword: "",
};

export const fields: Field[] = [
  {
    type: "password",
    name: "password",
    placeholder: "Enter your new password",
    icon: faLock,
    as: "input",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm your password",
    icon: faLock,
    as: "input",
  },
];

export const buttons: CustomButtonProps[] = [
  {
    type: "submit",
    label: "Update Password",
    theme: {
      bg: "bg-blue dark:bg-purple",
      color: "text-white",
    },
  },
];
