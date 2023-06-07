import {
  faAt,
  faUser,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  Field,
  CustomButtonProps,
  ProfileFormValues,
  UserAuth,
} from "../../types";

export const getInitialvalues = (auth: UserAuth | null): ProfileFormValues => {
  return {
    email: auth ? auth.email : "",
    username: auth ? auth.sub : "",
    fullName: auth ? auth.fullName : "",
    phone: auth ? auth.phone : "",
    country: auth ? auth.country : "",
    city: auth ? auth.city : "",
    suponsorName: auth ? auth.sponsorName : "",
  };
  // walletAddress: "AIASHDFLKASNDC1651IJASDNCIANJS",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "username",
    label: "Nombre de usuario",
    placeholder: "Ingresa tu nombre de usuario",
    icon: faUser,
    as: "input",
    disabled: true,
  },
  {
    type: "text",
    name: "fullName",
    label: "Nombre completo",
    placeholder: "Ingresa tu nombre completo *",
    icon: faUser,
    as: "input",
    disabled: true,
  },
  {
    type: "text",
    name: "email",
    label: "Correo electrónico",
    placeholder: "Ingresa tu correo electrónico",
    icon: faAt,
    as: "input",
    disabled: true,
  },
  {
    type: "number",
    name: "phone",
    label: "Celular",
    placeholder: "Ingresa tu número de celular",
    icon: faPhone,
    as: "input",
  },
  {
    type: "text",
    name: "country",
    label: "País",
    placeholder: "País",
    icon: faLocationDot,
    as: "select",
    selectName: "countries",
  },
  {
    type: "text",
    name: "city",
    label: "Estado / departamento / provincia",
    placeholder: "Escoja su estado / departamento / provincia",
    icon: faLocationDot,
    as: "select",
    selectName: "cities",
  },
  {
    type: "text",
    name: "suponsorName",
    label: "Nombre de patrocinador",
    placeholder: "Nombre del patrocinador",
    icon: faUser,
    as: "input",
    disabled: true,
  },
];

export const buttons: CustomButtonProps[] = [
  {
    type: "submit",
    label: "Guardar cambios",
    theme: {
      bg: "bg-blue dark:bg-purple",
      color: "text-white",
    },
  },
];
