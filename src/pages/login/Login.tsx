import { Link } from "react-router-dom";
import { FormikValues } from "formik";

import { initialvalues, fields, buttons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useAuth } from "../../hooks";

import { CustomForm } from "../../components";

const Login = () => {
  const { logIn } = useAuth();
  return (
    <div
      className="w-full bg-white flex lg:justify-center items-center flex-col gap-3
      relative dark:bg-darkGray md:w-3/5 xl:w-1/3 md:rounded-[10px] overflow-hidden py-10 
      md:h-auto h-[calc(100vh-150px)] justify-start px-10 md:px-0"
    >
      <CustomForm
        formTitle="Login"
        fields={fields}
        buttons={buttons}
        initialValues={initialvalues}
        validationSchema={validationSchema}
        hasCaptcha
        cols="1"
        form="login"
        action={(values: FormikValues) => logIn(values)}
      />
      <h2 className="font-poppins text-darkGray font-medium text-[16px] dark:text-white text-center">
        Don't you have an account?{" "}
        <Link to="/" className="font-poppins text-blue font-extrabold">
          {" "}
          Sign up
        </Link>
      </h2>
    </div>
  );
};

export default Login;
