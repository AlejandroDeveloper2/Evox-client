import * as yup from "yup";

const isRequiredMessage = "Field is required!";
const validEmailMessage = "Invalid email!";

export const validationSchema = yup.object().shape({
  email: yup.string().required(isRequiredMessage).email(validEmailMessage),
});
