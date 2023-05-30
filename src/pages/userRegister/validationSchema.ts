import * as yup from "yup";

const isRequiredMessage = "El campo  es requerido!";
const validEmailMessage = "Correo invalido!";
const passwordMessage = "La contraseña debe ser de al menos 8 caracteres!";
const passwordsDontMatchMessage = "Las contraseñas no coinciden!";
const passwordRulesMessage =
  "La contraseña debe tener al menos una letra mayuscula, una minuscula y un numero!";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const userNameRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/;
const userNameRule2 = /^[a-zA-Z0-9 ]+$/;

export const validationSchema = yup.object().shape({
  email: yup.string().required(isRequiredMessage).email(validEmailMessage),
  password: yup
    .string()
    .required(isRequiredMessage)
    .min(8, passwordMessage)
    .matches(passwordRules, { message: passwordRulesMessage }),
  confirmPassword: yup
    .string()
    .required(isRequiredMessage)
    .oneOf([yup.ref("password")], passwordsDontMatchMessage),
  username: yup
    .string()
    .required(isRequiredMessage)
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres!")
    .matches(userNameRules, {
      message: "El nombre de usuario debe contener al menos un número!",
    })
    .matches(userNameRule2, {
      message: "El nombre de usuario solo puede contener letras y números!",
    }),
  fullName: yup.string().required(isRequiredMessage),
  phone: yup.string().required(isRequiredMessage),
  country: yup.string().required(isRequiredMessage),
  city: yup.string().required(isRequiredMessage),
});
