import {
  faEarthAmericas,
  faAt,
  faAddressCard,
  faLock,
  faUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, RegisterFormValues } from "../../types";

export const initialvalues: RegisterFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  fullname: "",
  typeOfIdentification: "",
  identification: "",
  country: "",
  countryOfResidence: "",
  invitationLink: "",
  referral: "",
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
    type: "text",
    name: "username",
    label: "Username *",
    placeholder: "Enter your username",
    icon: faUser,
    as: "input",
  },
  {
    type: "text",
    name: "fullname",
    label: "Fullname *",
    placeholder: "Enter your fullname",
    icon: faUser,
    as: "input",
  },
  {
    type: "text",
    name: "typeOfIdentification",
    label: "Type of identification *",
    placeholder: "Enter the type of identification",
    icon: faAddressCard,
    as: "input",
  },
  {
    type: "text",
    name: "identification",
    label: "Identification number *",
    placeholder: "Enter your identification number",
    icon: faAddressCard,
    as: "input",
  },
  {
    type: "text",
    name: "country",
    label: "Id emisor country *",
    placeholder: "País emisor de tu identificación",
    icon: faEarthAmericas,
    as: "select",
  },
  {
    type: "text",
    name: "countryOfResidence",
    label: "Country of residence *",
    placeholder: "Choose your country",
    icon: faLocationDot,
    as: "select",
  },
  {
    type: "text",
    name: "referral",
    label: "Referral ID (optional)",
    placeholder: "",
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
      bg: "bg-blue",
      color: "text-white",
    },
  },
];
