import { FormikValues } from "formik";

import {
  City,
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
  cities: City[];
  userIP: UserIP;
  loading: SpinnerProps;
  toast: ToastProps;
  isMenuVisible: boolean;
  isValidating: boolean;
  loader: LoaderProps;
  page: string;
  setLoading: React.Dispatch<React.SetStateAction<SpinnerProps>>;
  setToast: React.Dispatch<React.SetStateAction<ToastProps>>;
  toggleLateralMenu: () => void;
  setIsValidating: React.Dispatch<React.SetStateAction<boolean>>;
  setLoader: React.Dispatch<React.SetStateAction<LoaderProps>>;
  getCities: (country: string) => Promise<void>;
}

interface AuthContextType {
  children?: JSX.Element | JSX.Element[];
  auth: UserAuth | null;
  success: boolean;
  phoneCode: string;
  logIn: (userData: FormikValues) => Promise<void>;
  logOut: () => void;
  createAccount: (userData: FormikValues) => Promise<void>;
  checkChangePassToken: () => Promise<void>;
  sendRequestPassword: (userData: FormikValues) => Promise<void>;
  changeUserPassword: (userData: FormikValues) => Promise<void>;
  validateAccount: () => Promise<void>;
  setAuth: React.Dispatch<React.SetStateAction<UserAuth | null>>;
  setPhoneCode: React.Dispatch<React.SetStateAction<string>>;
}

interface EvoxContextType {
  children?: JSX.Element | JSX.Element[];
  userReferrals: Referral[];
  getAllUserReferrals: () => Promise<void>;
}

interface ThemeContextType {
  children?: JSX.Element | JSX.Element[];
  theme: string;
  toggleTheme: () => void;
}

interface Functions {
  function: () => Promise<void>;
}

interface UserProfileContextType {
  children?: JSX.Element | JSX.Element[];
  profilePhoto: string | null;
  editUserProfile: (userData: FormikValues) => Promise<void>;
  uploadProfilePhoto: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export type {
  AppContextType,
  AuthContextType,
  EvoxContextType,
  ThemeContextType,
  Functions,
  UserProfileContextType,
};
