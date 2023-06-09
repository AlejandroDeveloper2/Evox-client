import { FormikValues } from "formik";

import {
  BridgeFundsAccount,
  City,
  Country,
  Referral,
  ServerResponseFail,
  ServerResponseSuccess,
  SpinnerProps,
  Status,
  Team,
  ToastProps,
  Transaction,
  UserAccountBridgeFunds,
  UserAuth,
  UserIP,
  UserSyntheticAccount,
} from ".";

interface AppContextType {
  children?: JSX.Element | JSX.Element[];
  countries: Country[];
  cities: City[];
  userIP: UserIP;
  loading: SpinnerProps;
  toast: ToastProps;
  isMenuVisible: boolean;
  setLoading: React.Dispatch<React.SetStateAction<SpinnerProps>>;
  setToast: React.Dispatch<React.SetStateAction<ToastProps>>;
  toggleLateralMenu: () => void;
  getCities: (country: string) => Promise<void>;
}

interface AuthContextType {
  children?: JSX.Element | JSX.Element[];
  status: Status;
  auth: UserAuth | null;
  success: boolean;
  phoneCode: string;
  logIn: (userData: FormikValues) => Promise<void>;
  logOut: () => void;
  createAccount: (userData: FormikValues) => Promise<void>;
  checkChangePassToken: () => Promise<boolean>;
  sendRequestPassword: (userData: FormikValues) => Promise<void>;
  changeUserPassword: (userData: FormikValues) => Promise<void>;
  validateAccount: () => Promise<ServerResponseSuccess | ServerResponseFail>;
  setAuth: React.Dispatch<React.SetStateAction<UserAuth | null>>;
  setPhoneCode: React.Dispatch<React.SetStateAction<string>>;
}

interface EvoxContextType {
  children?: JSX.Element | JSX.Element[];
  team: Team[];
  referrals: Referral[];
  bridgeFundsAccounts: BridgeFundsAccount[];
  hasAccount: boolean;
  userSyntheticAccount: UserSyntheticAccount;
  bridgeFundsAccountInfo: { id: number; quantity: number };
  isChecking: boolean;
  getTeam: (team: Team[]) => void;
  getDirectReferrals: (referrals: Referral[]) => void;
  activeSyntheticAccount: (transaction: string) => Promise<void>;
  registerSyntheticsAccount: (login: string, password: string) => Promise<void>;
  sendTransaction: (transaction: Transaction) => Promise<void>;
  invalidSyntheticAccount: (transaction: string) => Promise<void>;
  getBridgeKindOfAccounts: () => Promise<void>;
  activeBridgeAccount: (transaction: string) => Promise<void>;
  invalidBridgeAccount: (transaction: string) => Promise<void>;
  sendBridgeTransaction: (transaction: Transaction) => Promise<void>;
  checkUserSyntheticAccount: () => Promise<void>;
  getSyntheticAccount: () => Promise<void>;
  getBridgeAccountFeatures: (id: number, quantity: number) => void;
  checkSyntheticCredentials: (id: number) => void;
  registerUserBridgeAccounts: (
    id: number,
    dataAccounts: UserAccountBridgeFunds[]
  ) => Promise<void>;
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
