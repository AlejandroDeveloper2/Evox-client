/* eslint-disable @typescript-eslint/no-explicit-any */
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
  selectName?: "countries" | "cities" | "ticketOptions";
}

interface CustomButtonProps {
  type: "submit" | "button" | "reset" | "externalLink";
  label: string;
  theme: {
    bg: string;
    color: string;
    aditionalStyles?: string;
  };
  externalLink?: string;
  icon?: IconDefinition;
  disabled?: boolean;
  onClick?: () => void;
  title?: string;
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
  action: (values: FormikValues) => Promise<void>;
}

interface SpinnerProps {
  message: string;
  visible: boolean;
}

interface ToastProps extends SpinnerProps {
  type: "error" | "success" | "warning" | "info";
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
  label: string;
  to: string;
  enabled: boolean;
  subItems?: MenuItem[];
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

interface TableHeader {
  label: string;
}

interface MobileTableHeader extends TableHeader {
  icon: IconDefinition;
}

interface TableProps {
  children: JSX.Element | JSX.Element[];
  headers: TableHeader[];
}

interface MobileTableRecordProps {
  values: MobileTableHeader[];
  records: string | number[];
}

interface EmptyTableProps {
  message: string;
  colspan: number;
}

type CopyLinkProps = {
  link: string;
  width?: string;
};

interface BridgeFundsFormProps {
  id: number;
  quantity: number;
}

export type {
  Field,
  CustomButtonProps,
  CustomFormProps,
  SpinnerProps,
  ToastProps,
  CustomInputProps,
  RenderInputProps,
  MenuItem,
  ServiceCardProps,
  CountDownElement,
  InfoCardProps,
  AutomatedSystem,
  TableProps,
  TableHeader,
  EmptyTableProps,
  CopyLinkProps,
  MobileTableHeader,
  MobileTableRecordProps,
  BridgeFundsFormProps,
};
