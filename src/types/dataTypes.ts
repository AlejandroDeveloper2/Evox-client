type FormType = "login" | "recover" | "register" | "profile";

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
  suponsorName: string | null;
  iat: number;
  exp: number;
}

interface Role {
  authority: string;
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
  Team
};
