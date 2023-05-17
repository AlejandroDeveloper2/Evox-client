import { FormikValues } from "formik";

import {
  Country,
  LoaderProps,
  Referral,
  SpinnerProps,
  ToastProps,
  UserAuth,
  UserIP,
} from ".";

interface AppContextType {
  children?: JSX.Element | JSX.Element[];
  countries: Country[];
  userIP: UserIP;
  loading: SpinnerProps;
  toast: ToastProps;
  isMenuVisible: boolean;
  isValidating: boolean;
  loader: LoaderProps;
  setLoading: React.Dispatch<React.SetStateAction<SpinnerProps>>;
  setToast: React.Dispatch<React.SetStateAction<ToastProps>>;
  toggleLateralMenu: () => void;
  setIsValidating: React.Dispatch<React.SetStateAction<boolean>>;
  setLoader: React.Dispatch<React.SetStateAction<LoaderProps>>;
}

interface AuthContextType {
  children?: JSX.Element | JSX.Element[];
  auth: UserAuth | null;
  success: boolean;
  logIn: (userData: FormikValues) => Promise<void>;
  logOut: () => void;
  createAccount: (userData: FormikValues) => Promise<void>;
  checkChangePassToken: () => Promise<void>;
  sendRequestPassword: (userData: FormikValues) => Promise<void>;
  changeUserPassword: (userData: FormikValues) => Promise<void>;
  validateAccount: () => Promise<void>;
}

interface EvoxContextType {
  children?: JSX.Element | JSX.Element[];
  userReferrals: Referral[];
}

interface ThemeContextType {
  children?: JSX.Element | JSX.Element[];
  theme: string;
  toggleTheme: () => void;
}

interface Functions {
  function: () => Promise<void>;
}

export type {
  AppContextType,
  AuthContextType,
  EvoxContextType,
  ThemeContextType,
  Functions,
};