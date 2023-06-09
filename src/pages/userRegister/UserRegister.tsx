import { Link } from "react-router-dom";

import { initialvalues, fields, buttons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useAuth } from "../../hooks";

import { CustomForm } from "../../components";

const UserRegister = () => {
  const { createAccount } = useAuth();

  return (
    <div
      className="w-full bg-primary-color flex lg:justify-center items-center flex-col gap-3
      relative dark:bg-darkGray lg:w-1/2 xl:w-1/3 lg:rounded-[10px] overflow-hidden pb-10 
      lg:h-auto h-[calc(400px - 100vh)] px-10 justify-start"
    >
      <CustomForm
        formTitle="Registrarse es facil y rapido!"
        fields={fields}
        buttons={buttons}
        initialValues={initialvalues}
        validationSchema={validationSchema}
        hasCaptcha
        cols="1"
        form="register"
        action={createAccount}
      />
      <h2 className="font-poppins text-blue dark:text-white font-medium text-[16px]">
        ¿Ya estas registrado?{" "}
        <Link to="/login" className="font-poppins text-blue font-extrabold">
          {" "}
          Iniciar sesión
        </Link>
      </h2>
    </div>
  );
};

export default UserRegister;
