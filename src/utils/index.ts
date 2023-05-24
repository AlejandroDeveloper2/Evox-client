import { FormikErrors, FormikValues } from "formik";
import { Location } from "react-router-dom";
import * as copy from "copy-to-clipboard";

import { FormType, ToastProps, UserIP } from "../types";

interface FormConfig {
  location: Location;
  userIp: UserIP;
  profileImageUrl: string | null;
  phoneCode: string;
}

const formatUserID = (userID: string): string => {
  let newUserID = "";
  for (let index = 0; index < userID.length; index++) {
    let element = userID[index];
    if (
      element === "." ||
      element === "-" ||
      element === ":" ||
      element === ","
    ) {
      element = "";
    } else {
      newUserID += element;
    }
  }
  return newUserID;
};

const toggleButton = (
  errors: FormikErrors<FormikValues>,
  values: FormikValues,
  isCaptchaChecked: boolean,
  hasCaptcha: boolean | undefined,
  type: "submit" | "button" | "reset" | undefined
): boolean => {
  const disable: boolean = hasCaptcha
    ? Object.keys(errors).length > 0 || !isCaptchaChecked
      ? true
      : false
    : type === "button"
    ? false
    : Object.keys(errors).length > 0 || Object.values(values).includes("")
    ? true
    : false;
  return disable;
};

const setFormValues = (
  values: FormikValues,
  form: FormType,
  config: FormConfig
): FormikValues => {
  let newValues: FormikValues = { ...values };
  const { location, userIp, profileImageUrl, phoneCode } = config;

  if (form === "register") {
    const newUserID = formatUserID(values.identification);
    const referral = location?.pathname.split("/")[1].replace(/ /g, "");
    const invitationLink = referral
      ? `https://evox/ref/${location?.pathname.split("/")[1]}`
      : null;
    delete values.confirmPassword;
    delete values.invitationLink;
    newValues = referral
      ? {
          ...values,
          phone: `${phoneCode} ${values.phone}`,
          identification: newUserID,
          username: values.username.replace(/ /g, ""),
          invitationLink: invitationLink,
        }
      : {
          ...values,
          phone: `${phoneCode} ${values.phone}`,
          username: values.username.replace(/ /g, ""),
          identification: newUserID,
        };
    return newValues;
  }
  if (form === "login") {
    newValues = {
      ...values,
      ipAddress: userIp.ip,
      country: userIp.country_name,
      browser: userIp.browser_name,
    };
    return newValues;
  }
  if (form === "profile") {
    newValues = {
      ...values,
      photo: profileImageUrl,
    };
    return newValues;
  }
  return newValues;
};

const setToastColor = (
  type: "error" | "success" | "warning" | "info"
): string => {
  const color =
    type === "success"
      ? "bg-success"
      : type === "error"
      ? "bg-error"
      : type === "warning"
      ? "bg-warning"
      : "bg-lightBlue";
  return color;
};

const setActiveMenuItem = (to: string, pathName: string): string[] => {
  const activeStyles: string[] =
    to === pathName
      ? ["bg-mediumGray", "text-white"]
      : ["bg-primary-color dark:bg-darkGray", "text-darkBlue dark:text-white"];
  return activeStyles;
};

const formatDate = (date: string): string => {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
};

const setMenuItemEnabled = (
  enabled: boolean,
  to: string,
  location: Location
): string => {
  const style = enabled
    ? `hover:bg-opacity-40 dark:hover:bg-opacity-40 ${
        setActiveMenuItem(to, location.pathname)[0]
      }`
    : "";
  return style;
};

const copyToDashDoard = (
  refLink: string,
  setToast: React.Dispatch<React.SetStateAction<ToastProps>>
) => {
  copy(refLink);
  setToast({
    message: "Link copied!",
    type: "success",
    visible: true,
  });
};

const setInputType = (
  inputType: string,
  passVisible: boolean | undefined
): string => {
  const typeInput =
    inputType === "password" ? (passVisible ? "text" : "password") : inputType;
  return typeInput;
};

export {
  formatUserID,
  toggleButton,
  setFormValues,
  setToastColor,
  setActiveMenuItem,
  formatDate,
  setMenuItemEnabled,
  copyToDashDoard,
  setInputType,
};
