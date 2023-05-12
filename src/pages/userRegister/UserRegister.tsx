import { Link } from "react-router-dom";

import { initialvalues, fields, buttons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useAuth } from "../../hooks";

import { CustomForm } from "../../components";

import RegisterImage from "../../assets/registration-image.svg";
import { FormikValues } from "formik";

const UserRegister = () => {
  const { createAccount } = useAuth();

  return (
    <div className="w-full bg-white dark:bg-darkGray flex justify-center items-center flex-col gap-1 pb-6 rounded-t-[20px] md:pb-[60px] relative">
      <img
        src={RegisterImage}
        alt="Register image"
        className=" absolute hidden lg:block lg:left-[-12%] w-1/4 h-1/4 lg:animate-wiggle"
      />
      <CustomForm
        formTitle="User Registration"
        fields={fields}
        buttons={buttons}
        initialValues={initialvalues}
        validationSchema={validationSchema}
        hasCaptcha
        cols="2"
        form="register"
        action={(values: FormikValues)=>createAccount(values)}
      />
      <h2 className="font-montserrat text-darkGray dark:text-white font-medium text-[16px]">
        Do you already have an account?{" "}
        <Link
          to="/login"
          className="font-montserrat text-purple font-extrabold"
        >
          {" "}
          Login
        </Link>
      </h2>
    </div>
  );
};

export default UserRegister;
