import * as yup from "yup";

const isRequiredMessage = "El campo  es requerido!";
const textAreaRules = "Solo se permiten maximo de 500 caracteres!";

export const validationSchema = yup.object().shape({
  category: yup.string().required(isRequiredMessage),
  message: yup.string().required(isRequiredMessage).max(500, textAreaRules),
});
