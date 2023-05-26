import { FormikHelpers, FormikValues } from "formik";

import { RenderInputProps } from ".";

interface FormHook {
  renderFormInputs: (config: RenderInputProps) => JSX.Element[];
  renderFormButtons: (config: RenderInputProps) => JSX.Element[];
  renderReCaptcha: () => JSX.Element;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => Promise<void>;
}

interface SelectOptionsHook {
  renderSelectOptions: () => JSX.Element[];
}

interface CountDownHook {
  timerValues: number[];
}

export type { FormHook, SelectOptionsHook, CountDownHook };
