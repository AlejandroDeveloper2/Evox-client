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
    label: "Your new password *",
    placeholder: "Enter your password",
    icon: faLock,
    as: "input",
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirm password *",
    placeholder: "Enter your password",
    icon: faLock,
    as: "input",
  },
];

export const buttons: CustomButtonProps[] = [
  {
    type: "submit",
    label: "Update Password",
    theme: {
      bg: "bg-blue",
      color: "text-white",
    },
  },
];
