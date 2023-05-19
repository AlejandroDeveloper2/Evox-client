import {
  faAt,
  faUser,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, ProfileFormValues, UserAuth } from "../../types";

export const getInitialvalues =( auth: UserAuth | null): ProfileFormValues =>{
  return {
    email:auth ? auth.email : "",
    username: auth ? auth.sub : "",
    fullName: auth ? auth.fullName : "",
    phone: auth ? auth.phone : "",
    country: auth ? auth.country : "",
    countryOfResidence: auth ? auth.countryOfResidence:"",
  }
  // suponsorName: "Diego Felipe",
  // walletAddress: "AIASHDFLKASNDC1651IJASDNCIANJS",
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
    name: "country",
    label: "Country *",
    placeholder: "Choose your country",
    icon: faLocationDot,
    as: "select",
    selectName: "countries",
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
