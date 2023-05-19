import { useNavigate } from "react-router-dom";
import { FormikValues } from "formik";

import { initialvalues, fields, getFormButtons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useAuth } from "../../hooks";

import { CustomForm } from "../../components";
import RecoverImage from "../../assets/recover-image.svg";

const RecoverPassword = (): JSX.Element => {
  const navigate = useNavigate();
  const { sendRequestPassword } = useAuth();
  const buttons = getFormButtons(navigate);
  return (
    <div className="w-full bg-white flex justify-center items-center flex-col gap-1 relative dark:bg-darkGray">
      <img
        src={RecoverImage}
        alt="Recover password image"
        className=" absolute hidden lg:block lg:left-[-12%] w-1/4 h-1/4 lg:animate-wiggle"
      />
      <CustomForm
        formTitle="Recover Password"
        fields={fields}
        buttons={buttons}
        initialValues={initialvalues}
        validationSchema={validationSchema}
        cols="1"
        form="recover"
        action={(values: FormikValues) => sendRequestPassword(values)}
      />
    </div>
  );
};

export default RecoverPassword;
