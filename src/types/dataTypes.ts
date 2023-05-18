type FormType = "login" | "recover" | "register";

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  fullName: string;
  phone: string;
  typeOfIdentification: string;
  identification: string;
  country: string;
  countryOfResidence: string;
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
  name: {
    common: string;
    official: string;
  };
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
  parent: string | null;
  refLink: string;
  userName: string;
  fullName: string;
  status: boolean;
  dateRegistered:string;
}

export type {
  FormType,
  RegisterFormValues,
  LoginFormValues,
  RecoverPassFormValues,
  ChangePasswordFormValues,
  Identification,
  Country,
  UserIP,
  UserAuth,
  ServerResponseSuccess,
  ServerResponseFail,
  LoginReasponse,
  Referral,
};
