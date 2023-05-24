import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { CustomFormProps } from "../../types";
import { useForm } from "../../hooks";

const CustomForm = (props: CustomFormProps): JSX.Element => {
  const { renderFormInputs, renderFormButtons, renderReCaptcha, onSubmit } =
    useForm(
      props.fields,
      props.buttons,
      props.form,
      props.action,
      props.hasCaptcha
    );

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validationSchema={props.validationSchema}
    >
      {({ touched, errors, values, isSubmitting }) => (
        <Form
          className={`flex flex-col lg:gap-5 ${
            props.form === "register" || props.form === "recover"
              ? "items-center"
              : "items-start"
          } w-full gap-10  md:px-20`}
        >
          <h1
            className={`font-poppins font-bold ${
              props.form === "login" || props.form === "recover"
                ? "text-darkGray"
                : "text-blue"
            } dark:text-white text-[18px] lg:text-[22px] text-center`}
          >
            {props.formTitle}
          </h1>
          <div
            className={`grid grid-cols-1 w-full gap-5 md:grid-cols-${props.cols} lg:grid-cols-${props.cols}`}
          >
            {renderFormInputs({ errors, touched, values })}
          </div>
          <div
            className={`flex flex-wrap gap-3 w-full justify-center md:grid grid-cols-1 md:justify-items-center`}
          >
            {props.form === "login" && (
              <Link
                to="/recoverPassword"
                className="font-poppins text-blue dark:text-white font-normal hover:text-secondaryColor transition-all"
              >
                {" "}
                Did you forget your password?
              </Link>
            )}
            {props.hasCaptcha && renderReCaptcha()}
            {renderFormButtons({ errors, touched, values, isSubmitting })}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
