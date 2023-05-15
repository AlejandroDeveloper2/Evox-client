import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FormikErrors,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from "formik";

export type FormType = "login" | "recover" | "register";

export interface RegisterFormValues {
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

export interface LoginFormValues {
  email: string;
  password: string;
  ipAddress: string;
  country: string;
  browser: string;
}

export interface RecoverPassFormValues {
  email: string;
}

export interface ChangePasswordFormValues {
  password: string;
  confirmPassword: string;
}

export interface Field {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  icon: IconDefinition;
  disabled?: boolean;
  as: "input" | "textarea" | "select";
  selectName?: "countries" | "identification";
}

export interface CustomButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  label: string;
  theme: {
    bg: string;
    color: string;
  };
  disabled?: boolean;
  onClick?: () => void;
}

export interface CustomFormProps {
  formTitle: string;
  fields: Field[];
  buttons: CustomButtonProps[];
  initialValues: FormikValues;
  validationSchema: object;
  hasCaptcha?: boolean;
  cols: string;
  login?: boolean;
  recover?: boolean;
  form: FormType;
  action: (values: FormikValues) => void;
}

export interface SpinnerProps {
  message: string;
  visible: boolean;
}

export interface ToastProps extends SpinnerProps {
  type: "error" | "success" | "warning" | "info";
}

export interface HeaderProps {
  pageName: string;
}

export interface FormHook {
  renderFormInputs: (config: RenderInputProps) => JSX.Element[];
  renderFormButtons: (config: RenderInputProps) => JSX.Element[];
  renderReCaptcha: () => JSX.Element;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void;
}

export interface RenderInputProps {
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  values: FormikValues;
  isSubmitting?: boolean;
}

export interface CustomInputProps extends RenderInputProps {
  field: Field;
}

export interface Identification {
  identification: {
    name: string;
    value: string;
  };
}

export interface AppContextType {
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

export interface AuthContextType {
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

export interface ThemeContextType {
  children?: JSX.Element | JSX.Element[];
  theme: string;
  toggleTheme: () => void;
}

export interface Country {
  name: {
    common: string;
    official: string;
  };
}

export interface UserIP {
  ip: string;
  country_name: string;
  browser_name: string;
}

export interface Functions {
  function: () => Promise<void>;
}

export interface MenuItem {
  rightIcon: IconDefinition | null;
  leftIcon: IconDefinition;
  label: string;
  to: string;
  subItems?: MenuItem[];
}

export interface UserAuth {
  sub: string;
  fullName: string;
  state: boolean;
  roles: Role[];
  refLink: string;
  iat: number;
  exp: number;
}

export interface Role {
  authority: string;
}

export interface ServerResponseSuccess {
  message: string;
  typeStatus: "Success";
}

export interface ServerResponseFail {
  message: string;
  typeStatus: "Error" | "Warning";
}

export interface LoginReasponse extends ServerResponseFail {
  token: string;
}

export interface LoaderProps {
  message: string;
  loading: boolean;
}

export interface SelectOptionsHook {
  renderSelectOptions: () => JSX.Element[];
}

export interface ServiceCardProps {
  serviceImage: string;
  alt: string;
  to: string;
}
