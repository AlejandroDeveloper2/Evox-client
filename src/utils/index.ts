import { FormikErrors, FormikValues } from "formik";
import { Location } from "react-router-dom";

import { FormType, UserIP } from "../types";

interface FormConfig {
  location: Location;
  userIp: UserIP;
}

const formatUserID = (userID: string): string => {
  const characters = [".", "-", ":", ","];
  let idUserValues: string[] = [];
  characters.forEach((character) => {
    if (userID.includes(character)) {
      idUserValues = userID.split(character);
    } else {
      idUserValues = [userID];
    }
  });
  const formattedUserId = idUserValues.join("");
  return formattedUserId;
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
  const { location, userIp } = config;

  if (form === "register") {
    const newUserID = formatUserID(values.identification);
    const invitationLink = location?.pathname.split("/")[1]
      ? location?.pathname.split("/")[1]
      : null;
    delete values.confirmPassword;
    delete values.invitationLink;
    newValues = invitationLink
      ? {
          ...values,
          identification: newUserID,
          invitationLink: `https://evox/ref/${values.username}`,
        }
      : {
          ...values,
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
      : "bg-secondaryColor";
  return color;
};

const setActiveMenuItem = (to: string, pathName: string): string[] => {
  const activeStyles: string[] =
    to === pathName
      ? [
          "bg-gradient-to-r from-blue via-purple to-lightBlue dark:from-purple dark:to-white",
          "text-white",
        ]
      : ["bg-white dark:bg-darkGray", "text-darkGray dark:text-white"];
  return activeStyles;
};
export {
  formatUserID,
  toggleButton,
  setFormValues,
  setToastColor,
  setActiveMenuItem,
};
