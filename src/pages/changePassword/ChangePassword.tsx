import React from "react";
import { Link } from "react-router-dom";
import { FormikValues } from "formik";

import { initialvalues, fields, buttons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useApp, useAuth } from "../../hooks";

import { CustomForm, Loader } from "../../components";
import LoginImage from "../../assets/login-image.svg";

const ChangePassword = (): JSX.Element => {
  const { isValidating } = useApp();
  const { checkChangePassToken } = useAuth();

  React.useEffect(() => {
    checkChangePassToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-white flex justify-center items-center flex-col gap-1 pb-6  rounded-t-[20px] relative">
      <img
        src={LoginImage}
        alt="Login image"
        className=" absolute hidden lg:block lg:left-[-12%] w-1/4 h-1/4 lg:animate-wiggle"
      />
      {isValidating ? (
        <Loader />
      ) : (
        <>
          <CustomForm
            formTitle="Update Password"
            fields={fields}
            buttons={buttons}
            initialValues={initialvalues}
            validationSchema={validationSchema}
            hasCaptcha
            cols="1"
            recover
            form="recover"
            action={(values: FormikValues) => console.log(values)}
          />
          <h2 className="font-montserrat text-darkGray font-medium text-[16px]">
            Return to
            <Link to="/" className="font-montserrat text-purple font-extrabold">
              {" "}
              Log in
            </Link>
          </h2>
        </>
      )}
    </div>
  );
};

export default ChangePassword;
