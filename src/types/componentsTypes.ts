import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FormikErrors, FormikTouched, FormikValues } from "formik";

import { FormType } from ".";

interface Field {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  icon: IconDefinition;
  disabled?: boolean;
  as: "input" | "textarea" | "select";
  selectName?: "countries" | "cities";
}

interface CustomButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  label: string;
  theme: {
    bg: string;
    color: string;
    aditionalStyles?: string;
  };
  icon?: IconDefinition;
  disabled?: boolean;
  onClick?: () => void;
}

interface CustomFormProps {
  formTitle: string;
  fields: Field[];
  buttons: CustomButtonProps[];
  initialValues: FormikValues;
  validationSchema: object;
  hasCaptcha?: boolean;
  cols: string;
  form: FormType;
  action: (values: FormikValues) => void;
}

interface SpinnerProps {
  message: string;
  visible: boolean;
}

interface ToastProps extends SpinnerProps {
  type: "error" | "success" | "warning" | "info";
}

interface HeaderProps {
  pageName: string;
}

interface CustomInputProps extends RenderInputProps {
  field: Field;
  passVisible?: boolean;
}

interface RenderInputProps {
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  values: FormikValues;
  isSubmitting?: boolean;
}

interface MenuItem {
  rightIcon: IconDefinition | null;
  leftIcon: IconDefinition;
  label: string;
  to: string;
  enabled: boolean;
  subItems?: MenuItem[];
}

interface LoaderProps {
  message: string;
  loading: boolean;
}

interface ServiceCardProps {
  serviceImage: string;
  alt: string;
  to: string;
  style?: string;
}

interface CountDownElement {
  value: string;
  label: string;
}

interface InfoCardProps {
  children: JSX.Element | JSX.Element[];
  style: string;
  img?: string;
}

interface AutomatedSystem {
  name: string;
  to: string;
}

export type {
  Field,
  CustomButtonProps,
  CustomFormProps,
  SpinnerProps,
  ToastProps,
  HeaderProps,
  CustomInputProps,
  RenderInputProps,
  MenuItem,
  LoaderProps,
  ServiceCardProps,
  CountDownElement,
  InfoCardProps,
  AutomatedSystem,
};
