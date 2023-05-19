import { FormikErrors, FormikValues } from "formik";
import { Location } from "react-router-dom";

import { FormType, UserIP } from "../types";

interface FormConfig {
  location: Location;
  userIp: UserIP;
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
  const { location, userIp } = config;

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
          identification: newUserID,
          username: values.username.replace(/ /g, ""),
          invitationLink: invitationLink,
        }
      : {
          ...values,
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
      ? [
          "bg-gradient-to-r from-blue via-purple to-lightBlue dark:from-purple dark:to-white",
          "text-white",
        ]
      : ["bg-white dark:bg-darkGray", "text-darkGray dark:text-white"];
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
    : "bg-black bg-opacity-30";
  return style;
};

export {
  formatUserID,
  toggleButton,
  setFormValues,
  setToastColor,
  setActiveMenuItem,
  formatDate,
  setMenuItemEnabled,
};
