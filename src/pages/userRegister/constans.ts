import {
  faEarthAmericas,
  faAt,
  faLock,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, RegisterFormValues } from "../../types";

export const initialvalues: RegisterFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  phone: "",
  country: "",
  city: "",
  invitationLink: "",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "username",
    label: "Username *",
    placeholder: "Enter your username",
    icon: faUser,
    as: "input",
  },
  {
    type: "text",
    name: "email",
    label: "Email *",
    placeholder: "Enter your email",
    icon: faAt,
    as: "input",
  },
  {
    type: "password",
    name: "password",
    label: "Password *",
    placeholder: "Enter your password",
    icon: faLock,
    as: "input",
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirm password *",
    placeholder: "Confirm your password",
    icon: faLock,
    as: "input",
  },
  {
    type: "number",
    name: "phone",
    label: "Phone *",
    placeholder: "Enter your phone number",
    icon: faPhone,
    as: "input",
  },

  {
    type: "text",
    name: "country",
    label: "Country *",
    placeholder: "Your country",
    icon: faEarthAmericas,
    as: "select",
    selectName: "countries",
  },
  {
    type: "text",
    name: "city",
    label: "City *",
    placeholder: "Your city",
    icon: faEarthAmericas,
    as: "select",
    selectName: "cities",
  },
  {
    type: "text",
    name: "referral",
    label: "Suponsor name",
    placeholder: "Suponsor name",
    icon: faUser,
    disabled: true,
    as: "input",
  },
];

export const buttons: CustomButtonProps[] = [
  {
    type: "submit",
    label: "Create an account",
    theme: {
      bg: "bg-blue dark:bg-purple",
      color: "text-white",
    },
  },
];
