import * as yup from "yup";

const isRequiredMessage = "Field is required!";
const passwordMessage = "Password must be at least 8 characters!";
const passwordsDontMatchMessage = "Passwords don't match!";
const passwordRulesMessage =
  "Password must have at least one uppercase and lowercase letter!";
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
