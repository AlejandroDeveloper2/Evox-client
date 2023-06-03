import React from "react";
import { Link } from "react-router-dom";

import { useApp, useAuth } from "../../hooks";
import { ServerResponseFail, ServerResponseSuccess } from "../../types";

import { Spinner } from "../../components";

const ActiveAccount = (): JSX.Element => {
  const [result, setResult] = React.useState<
    ServerResponseFail | ServerResponseSuccess
  >({
    message: "",
    typeStatus: "Success",
  });
  const { validateAccount } = useAuth();
  const { loading } = useApp();

  React.useEffect(() => {
    validateAccount().then((result) => {
      setResult(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-full bg-lightGray flex lg:justify-center items-center flex-col gap-3
      relative dark:bg-darkGray md:w-3/5 xl:w-1/3 md:rounded-[10px] overflow-hidden py-10 
      md:h-auto h-[calc(100vh-150px)] justify-start px-10 md:px-0"
    >
      {loading.visible ? (
        <Spinner color="text-darkBlue" />
      ) : (
        <>
          <h1 className="font-poppins text-[20px] font-semibold text-darkBlue text-center mb-4">
            {result.typeStatus === "Success"
              ? "Tu Cuenta ha sido activada exitosamente!"
              : "Token invalido intente nuevamente!"}
          </h1>
          <Link
            to="/login"
            className="text-white bg-darkGray dark:bg-primary-color 
              hover:bg-opacity-60 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm inline-flex 
              items-center px-5 py-4 text-center mr-2"
          >
            Regresar al inicio de sesión
          </Link>
        </>
      )}
    </div>
  );
};

export default ActiveAccount;
