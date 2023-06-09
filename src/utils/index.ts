import { FormikErrors, FormikValues } from "formik";
import { Location } from "react-router-dom";

import { FormType, Referral, Team, ToastProps, UserIP } from "../types";
import {
  Banner1Mobile,
  Banner1PC,
  Banner2Mobile,
  Banner2PC,
  Banner3Mobile,
  Banner3PC,
  Banner4Mobile,
  Banner4PC,
} from "../assets";

interface FormConfig {
  location: Location;
  userIp: UserIP;
  profileImageUrl: string | null;
  phoneCode: string;
}

const toggleButton = (
  errors: FormikErrors<FormikValues>,
  values: FormikValues,
  isCaptchaChecked: boolean,
  hasCaptcha: boolean | undefined
): boolean => {
  const disable: boolean = hasCaptcha
    ? Object.keys(errors).length > 0 || !isCaptchaChecked
      ? true
      : false
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
    const referral = location?.pathname.split("/")[1].replace(/ /g, "");
    const invitationLink = referral
      ? `https://www.backoffice.evox.com.co/${location?.pathname.split("/")[1]}`
      : null;
    delete values.invitationLink;
    delete newValues.confirmPassword;
    newValues = referral
      ? {
          ...values,
          phone: `${phoneCode} ${values.phone}`,
          username: values.username.replace(/ /g, ""),
          invitationLink: invitationLink,
        }
      : {
          ...values,
          phone: `${phoneCode} ${values.phone}`,
          username: values.username.replace(/ /g, ""),
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
      : ["", "text-darkBlue dark:text-white"];
  return activeStyles;
};

const formatDate = (date: string): string => {
  const formattedDate = new Date(date).toLocaleString("es-ES", {
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
  const aux = document.createElement("input");
  aux.setAttribute("value", refLink);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  setToast({
    message: "Texto copiado!",
    type: "success",
    visible: true,
  });
  setTimeout(() => {
    setToast({
      message: "",
      type: "success",
      visible: false,
    });
  }, 3000);
};

const setInputType = (
  inputType: string,
  passVisible: boolean | undefined
): string => {
  const typeInput =
    inputType === "password" ? (passVisible ? "text" : "password") : inputType;
  return typeInput;
};

const sortReferralsRecords = (
  data: Referral[] | Team[]
): Referral[] | Team[] => {
  const sortedRecords = data.sort(
    (a, b) =>
      new Date(b.dateRegistered).getTime() -
      new Date(a.dateRegistered).getTime()
  );
  return sortedRecords;
};

const calculateTotalToPay = (price: string, quantity: string): number => {
  const totalToPay = parseInt(price) * parseInt(quantity);
  return totalToPay;
};

const getToken = (): string => {
  const token = localStorage.getItem("token");
  if (token) return token;
  return "";
};

const getQuantityAndIdBridgeFunds = (location: Location): number[] => {
  const accountData: string = location.pathname.split("/")[3];
  const quantity = parseInt(accountData.split("-")[0]);
  const id = parseInt(accountData.split("-")[1]);
  return [quantity, id];
};

const getBannerImg = (screenSize: number, path: string): string => {
  const banner =
    path === "bridgeMarkets"
      ? screenSize >= 768
        ? Banner1PC
        : Banner1Mobile
      : path === "evoxSynthetics"
      ? screenSize >= 768
        ? Banner2PC
        : Banner2Mobile
      : path === "automaticTrading"
      ? screenSize >= 768
        ? Banner3PC
        : Banner3Mobile
      : path === "bridgeFunds"
      ? screenSize >= 768
        ? Banner4PC
        : Banner4Mobile
      : "";
  return banner;
};

export {
  toggleButton,
  setFormValues,
  setToastColor,
  setActiveMenuItem,
  formatDate,
  setMenuItemEnabled,
  copyToDashDoard,
  setInputType,
  sortReferralsRecords,
  calculateTotalToPay,
  getToken,
  getQuantityAndIdBridgeFunds,
  getBannerImg,
};
