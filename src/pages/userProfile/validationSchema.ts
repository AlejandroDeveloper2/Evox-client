import * as yup from "yup";

const isRequiredMessage = "Field is required!";

export const validationSchema = yup.object().shape({
  phone: yup.string().required(isRequiredMessage),
  countryOfResidence: yup.string().required(isRequiredMessage),
  country: yup.string().required(isRequiredMessage),
});
