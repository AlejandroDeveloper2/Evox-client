import {
  faEarthAmericas,
  faAt,
  faLock,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Field, CustomButtonProps, RegisterFormValues } from "../../types";

export const initialvalues: RegisterFormValues = {
  fullName: "",
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
    name: "fullName",
    label: "Nombre completo *",
    placeholder: "Ingresa tu nombre completo",
    icon: faUser,
    as: "input",
  },
  {
    type: "text",
    name: "username",
    label: "Nombre de usuario *",
    placeholder: "Ingresa tu nombre de usuario",
    icon: faUser,
    as: "input",
  },
  {
    type: "text",
    name: "email",
    label: "Correo electrónico *",
    placeholder: "Ingresa tu correo electrónico",
    icon: faAt,
    as: "input",
  },
  {
    type: "password",
    name: "password",
    label: "Contraseña *",
    placeholder: "Ingresa tu contraseña",
    icon: faLock,
    as: "input",
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirmar contraseña *",
    placeholder: "Confirma tu contraseña",
    icon: faLock,
    as: "input",
  },
  {
    type: "number",
    name: "phone",
    label: "Celular *",
    placeholder: "Ingresa tu número de celular",
    icon: faPhone,
    as: "input",
  },

  {
    type: "text",
    name: "country",
    label: "País *",
    placeholder: "Tu país",
    icon: faEarthAmericas,
    as: "select",
    selectName: "countries",
  },
  {
    type: "text",
    name: "city",
    label: "Ciudad *",
    placeholder: "Tu ciudad",
    icon: faEarthAmericas,
    as: "select",
    selectName: "cities",
  },
  {
    type: "text",
    name: "referral",
    label: "Nombre de patrocinador",
    placeholder: "Nombre de patrocinador",
    icon: faUser,
    disabled: true,
    as: "input",
  },
];

export const buttons: CustomButtonProps[] = [
  {
    type: "submit",
    label: "Registrarse",
    theme: {
      bg: "bg-blue dark:bg-purple",
      color: "text-white",
    },
  },
];
