import * as yup from "yup";

const isRequiredMessage = "El campo  es requerido!";
const passwordMessage = "La contraseña debe ser de al menos 8 caracteres!";
const passwordsDontMatchMessage = "Las contraseñas no coinciden!";
const passwordRulesMessage =
  "La contraseña debe tener al menos una letra mayuscula y minuscula!";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required(isRequiredMessage)
    .min(8, passwordMessage)
    .matches(passwordRules, { message: passwordRulesMessage }),
  confirmPassword: yup
    .string()
    .required(isRequiredMessage)
    .oneOf([yup.ref("password")], passwordsDontMatchMessage),
});
