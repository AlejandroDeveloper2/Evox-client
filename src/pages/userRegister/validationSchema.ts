import * as yup from "yup";

const isRequiredMessage = "Field is required!";
const validEmailMessage = "Invalid email!";
const passwordMessage = "Password must be at least 8 characters!";
const passwordsDontMatchMessage = "Passwords don't match!";
const passwordRulesMessage =
  "Password must have at least one uppercase and lowercase letter!";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

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
    .min(3, "Username must be at least 3 characters!"),
  fullName: yup.string().required(isRequiredMessage),
  phone: yup.string().required(isRequiredMessage),
  country: yup.string().required(isRequiredMessage),
  city: yup.string().required(isRequiredMessage),
});
