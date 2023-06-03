import React from "react";
import { Link } from "react-router-dom";

import { initialvalues, fields, buttons } from "./constans";
import { validationSchema } from "./validationSchema";
import { useApp, useAuth } from "../../hooks";

import { CustomForm, Spinner } from "../../components";

const ChangePassword = (): JSX.Element => {
  const [isTokenValid, setIsTokenValid] = React.useState<boolean>(false);
  const { loading } = useApp();
  const { checkChangePassToken, changeUserPassword } = useAuth();

  React.useEffect(() => {
    checkChangePassToken().then((tokenValid) => {
      setIsTokenValid(tokenValid);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-full bg-white flex lg:justify-center items-center flex-col gap-3
    relative dark:bg-darkGray md:w-3/5 xl:w-1/3 md:rounded-[10px] overflow-hidden py-10 
    md:h-auto h-[calc(100vh-250px)] justify-start px-10 md:px-0"
    >
      {loading.visible ? (
        <Spinner color="text-darkGray" />
      ) : isTokenValid ? (
        <>
          <CustomForm
            formTitle="Actualizar contraseña"
            fields={fields}
            buttons={buttons}
            initialValues={initialvalues}
            validationSchema={validationSchema}
            hasCaptcha
            cols="1"
            form="recover"
            action={changeUserPassword}
          />
          <h2 className="font-poppins text-darkGray font-medium text-[16px]">
            Regresar a
            <Link to="/" className="font-poppins text-purple font-extrabold">
              {" "}
              Iniciar sesión
            </Link>
          </h2>
        </>
      ) : (
        <h1 className="font-poppins text-[20px] font-semibold text-darkBlue text-center">
          Token Invalido intente de nuevo!
        </h1>
      )}
    </div>
  );
};

export default ChangePassword;
