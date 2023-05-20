import { Link } from "react-router-dom";
import { FormikValues } from "formik";

import { initialvalues, fields, buttons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useAuth } from "../../hooks";

import { CustomForm } from "../../components";
import LoginImage from "../../assets/login-image.svg";

const Login = () => {
  const { logIn } = useAuth();
  return (
    <div className="w-full bg-white flex justify-center items-center flex-col gap-1 pb-6 relative dark:bg-darkGray h-[calc(100vh-400px)] xl:h-auto">
      <img
        src={LoginImage}
        alt="Login image"
        className="absolute hidden xl:block xl:left-[-12%] w-1/4 h-1/4 xl:animate-wiggle"
      />
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
      <h2 className="font-montserrat text-darkGray font-medium text-[16px] dark:text-white">
        Don't you have an account?{" "}
        <Link to="/" className="font-montserrat text-purple font-extrabold">
          {" "}
          Sign up
        </Link>
      </h2>
    </div>
  );
};

export default Login;
