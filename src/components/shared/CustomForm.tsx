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
          className="w-full lg:w-3/4 bg-white dark:bg-darkGray lg:h-auto flex flex-col gap-5 pt-[40px] md:w-3/4
         pb-[10px] px-[40px] h-auto lg:justify-center items-center md:h-full md:justify-center"
        >
          <h1 className="font-montserrat font-bold text-darkGray dark:text-white text-[18px] lg:text-[22px]">
            {props.formTitle}
          </h1>
          <div
            className={`grid grid-cols-1 w-full gap-5 ${
              props.form === "login" || props.form === "recover"
                ? "lg:w-3/4"
                : ""
            } ${
              props.form === "login" || props.form === "recover"
                ? `md:grid-cols-${props.cols}`
                : "md:grid-cols-2"
            } lg:grid-cols-${props.cols}`}
          >
            {renderFormInputs({ errors, touched, values })}
          </div>
          <div
            className={`flex flex-wrap gap-3 w-full ${
              props.form === "login" || props.form === "recover"
                ? "lg:w-3/4"
                : ""
            } justify-center md:grid grid-cols-1 md:justify-items-center`}
          >
            {props.form === "login" && (
              <Link
                to="/recoverPassword"
                className="font-montserrat text-darkGray dark:text-white font-normal hover:text-secondaryColor transition-all"
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
