import { Link } from "react-router-dom";

import { initialvalues, fields, buttons } from "./constans";
import { validationSchema } from "./validationSchema";

import { CustomForm } from "../../components";
import LoginImage from "../../assets/login-image.svg";

const Login = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center flex-col gap-1 pb-6  rounded-t-[20px] relative">
      <img
        src={LoginImage}
        alt="Login image"
        className=" absolute hidden lg:block lg:left-[-12%] w-1/4 h-1/4 lg:animate-wiggle"
      />
      <CustomForm
        formTitle="Login"
        fields={fields}
        buttons={buttons}
        initialValues={initialvalues}
        validationSchema={validationSchema}
        hasCaptcha
        cols="1"
        login
        form="login"
      />
      <h2 className="font-montserrat text-darkGray font-medium text-[16px]">
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
