import {
  faAt,
  faWallet,
  faUser,
  faLocationDot,
  faPhone,
  faPerson,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, ProfileFormValues } from "../../types";

export const initialvalues: ProfileFormValues = {
  profilePhotoUrl: "",
  email: "diazalejandro@gmail.com",
  username: "Alejo98",
  fullName: "Diego Alejandro Diaz",
  phone: "",
  countryOfResidence: "",
  suponsorName: "Diego Felipe",
  walletAddress: "AIASHDFLKASNDC1651IJASDNCIANJS",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "username",
    label: "Username *",
    placeholder: "Enter your username",
    icon: faUser,
    as: "input",
    disabled: true,
  },
  {
    type: "text",
    name: "fullName",
    label: "Fullname *",
    placeholder: "Enter your fullname",
    icon: faUser,
    as: "input",
    disabled: true,
  },
  {
    type: "text",
    name: "email",
    label: "Email *",
    placeholder: "Enter your email",
    icon: faAt,
    as: "input",
    disabled: true,
  },
  {
    type: "number",
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
    icon: faPhone,
    as: "input",
  },
  {
    type: "text",
    name: "countryOfResidence",
    label: "Country of residence *",
    placeholder: "Choose your country",
    icon: faLocationDot,
    as: "select",
    selectName: "countries",
  },
  {
    type: "text",
    name: "suponsorName",
    label: "Suponsor",
    placeholder: "Enter your suponsor's name",
    icon: faPerson,
    as: "input",
    disabled: true,
  },
  {
    type: "text",
    name: "walletAddress",
    label: "Your wallet",
    placeholder: "Enter your wallet address",
    icon: faWallet,
    as: "input",
    disabled: true,
  },
];

export const buttons: CustomButtonProps[] = [
  {
    type: "submit",
    label: "Save changes",
    theme: {
      bg: "bg-blue dark:bg-purple",
      color: "text-white",
    },
  },
];
