import React from "react";
import { FormikHelpers, FormikValues } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useLocation } from "react-router-dom";

import {
  Field as FieldType,
  RenderInputProps,
  CustomButtonProps,
  FormHook,
  FormType,
} from "../types";
import { toggleButton, setFormValues } from "../utils";
import { useApp, useAuth } from ".";

import { CustomButton, CustomInput } from "../components";

const useForm = (
  fields: FieldType[],
  buttons: CustomButtonProps[],
  form: FormType,
  action: (values: FormikValues) => void,
  hasCaptcha?: boolean
): FormHook => {
  const [isCaptchaChecked, setIsCaptchaChecked] =
    React.useState<boolean>(false);
  const captcha = React.useRef<ReCAPTCHA>(null);
  const location = useLocation();
  const { userIP } = useApp();
  const { success } = useAuth();

  const renderFormInputs = (config: RenderInputProps): JSX.Element[] => {
    return fields.map((field, index) => (
      <CustomInput key={index} field={field} {...config} />
    ));
  };

  const renderFormButtons = (config: RenderInputProps): JSX.Element[] => {
    const { errors, values } = config;
    return buttons.map((button, index) => (
      <CustomButton
        key={index}
        type={button.type}
        label={button.label}
        theme={{
          bg: button.theme.bg,
          color: button.theme.color,
        }}
        disabled={toggleButton(
          errors,
          values,
          isCaptchaChecked,
          hasCaptcha,
          button.type
        )}
        onClick={button.onClick}
      />
    ));
  };

  const renderReCaptcha = (): JSX.Element => {
    return (
      <ReCAPTCHA
        ref={captcha}
        sitekey="6Lf2-ewlAAAAAIrhwUK-BBLBBNCbcyTNXIRKzwRp"
        onChange={() => {
          if (captcha.current?.getValue()) {
            setIsCaptchaChecked(true);
          }
        }}
      />
    );
  };

  const onSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ): void => {
    const newValues = setFormValues(values, form, { location, userIp: userIP });
    action(newValues);
    captcha.current?.reset();
    if (success) formikHelpers.resetForm();
  };

  return {
    renderFormInputs,
    renderFormButtons,
    renderReCaptcha,
    onSubmit,
  };
};

export default useForm;
