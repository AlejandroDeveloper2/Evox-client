import { Link } from "react-router-dom";
import { FormikValues } from "formik";

import { initialvalues, fields, getFormButtons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useAuth } from "../../hooks";

import { CustomForm } from "../../components";

const RecoverPassword = (): JSX.Element => {
  const { sendRequestPassword } = useAuth();
  const buttons = getFormButtons();

  return (
    <div
      className="w-full bg-white flex lg:justify-center items-center flex-col gap-3
      relative dark:bg-darkGray md:w-3/5 xl:w-1/3 md:rounded-[10px] overflow-hidden py-10 
      md:h-auto h-[calc(100vh-250px)] justify-start px-10 md:px-0"
    >
      <CustomForm
        formTitle="Ingresa tu correo electrónico para buscar tu cuenta"
        fields={fields}
        buttons={buttons}
        initialValues={initialvalues}
        validationSchema={validationSchema}
        cols="1"
        form="recover"
        action={(values: FormikValues) => sendRequestPassword(values)}
      />
      <h2 className="font-poppins text-darkGray font-medium text-[16px] dark:text-white text-center">
        Regresar a iniciar sesión{" "}
        <Link to="/login" className="font-poppins text-blue font-extrabold">
          {" "}
          Iniciar sesión
        </Link>
      </h2>
    </div>
  );
};

export default RecoverPassword;
