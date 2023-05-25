import * as yup from "yup";

const isRequiredMessage = "El campo  es requerido!";
const validEmailMessage = "Correo invalido!";

export const validationSchema = yup.object().shape({
  email: yup.string().required(isRequiredMessage).email(validEmailMessage),
});
