type FormType = "login" | "recover" | "register" | "profile" | "transactionId";

interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  phone: string;
  country: string;
  city: string;
  invitationLink?: string;
}

interface LoginFormValues {
  email: string;
  password: string;
  ipAddress: string;
  country: string;
  browser: string;
}

interface RecoverPassFormValues {
  email: string;
}

interface ChangePasswordFormValues {
  password: string;
  confirmPassword: string;
}

interface Identification {
  identification: {
    name: string;
    value: string;
  };
}

interface Country {
  id: number;
  name: string;
}

interface City extends Country {
  country_name: string;
}

interface UserIP {
  ip: string;
  country_name: string;
  browser_name: string;
}
interface UserAuth {
  sub: string;
  fullName: string;
  state: boolean;
  roles: Role[];
  refLink: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  photo: string | null;
  sponsorName: string | null;
  iat: number;
  exp: number;
  accountSynthetic: number;
}

type RoleType = "ROLE_USER" | "ROLE_ADMIN";

interface Role {
  authority: RoleType;
}

interface ServerResponseSuccess {
  message: string;
  typeStatus: "Success";
}

interface ServerResponseFail {
  message: string;
  typeStatus: "Error" | "Warning";
}

interface LoginReasponse extends ServerResponseFail {
  token: string;
}

interface Referral {
  id: string;
  userName: string;
  fullName: string;
  dateRegistered: string;
  phone?: string;
}

interface Team extends Referral {
  level?: string;
}

interface ProfileFormValues {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  suponsorName: string | null;
}

type Status = "authenticate" | "checking" | "noAuthenticate";

interface SyntheticsAccount {
  transaction: string;
  currency: string;
  price: number;
  activationDate: string;
  expirationDate: string;
  state: boolean;
  username: string;
  email: string;
}

interface BridgeAccount extends SyntheticsAccount {
  title: string;
  quantity: number;
  total: number;
}

interface Transaction {
  createdAt?: string;
  currency?: string;
  expirationDate?: string;
  bridgeAccountId?: number;
  id?: number;
  price?: number;
  state?: boolean;
  syntheticState?: AccountStatus;
  transaction: string;
  type?: TransactionType;
  userId?: string;
  quantity?: number;
}

interface BridgeFundsAccount {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
}

interface UserSyntheticAccount {
  id: number;
  login: string;
}

interface SyntheticsAccountCredentials {
  username: string;
  email: string;
  login: string;
  password: string;
  createdAt: string;
  state: boolean;
}

interface User {
  id?: number;
  username: string;
  email: string;
  fullName: string;
  phone: string;
  country: string;
  city: string;
  emailVerified: string;
  token?: string;
  photo?: string;
  refLink?: string;
  invitationLink?: string;
  roles: string;
  status: boolean;
  level?: number;
  createdAt?: string;
  updatedAt?: string;
}

type AccountStatus = "Verified" | "Shopping" | "Pending" | "Error";
type TransactionType = "Synthetic" | "Bridge funds";

export type {
  FormType,
  RegisterFormValues,
  LoginFormValues,
  RecoverPassFormValues,
  ChangePasswordFormValues,
  Identification,
  Country,
  City,
  UserIP,
  UserAuth,
  ServerResponseSuccess,
  ServerResponseFail,
  LoginReasponse,
  Referral,
  ProfileFormValues,
  Team,
  Status,
  SyntheticsAccount,
  AccountStatus,
  Transaction,
  Role,
  BridgeFundsAccount,
  BridgeAccount,
  UserSyntheticAccount,
  SyntheticsAccountCredentials,
  User,
};
