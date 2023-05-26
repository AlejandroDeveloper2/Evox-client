import React from "react";
import { decodeToken } from "react-jwt";
import { FormikValues } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

import {
  authenticateUser,
  registerUser,
  validateChangePassToken,
  validateBearerToken,
  recoverPassword,
  updatePassword,
  activeAccount,
} from "../services/authentication";
import {
  AuthContextType,
  ServerResponseFail,
  ServerResponseSuccess,
  LoginReasponse,
  UserAuth,
} from "../types";
import { useApp } from "../hooks";

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = React.useState<UserAuth | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [phoneCode, setPhoneCode] = React.useState<string>("");

  const { setToast, setLoading, setIsValidating, setLoader } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const logIn = async (userData: FormikValues): Promise<void> => {
    console.log(userData);
    setLoading({
      message: "Verificando credenciales...",
      visible: true,
    });
    await authenticateUser(userData)
      .then((res: LoginReasponse) => {
        if (!res.token) {
          setToast({
            message: res.message,
            type: res.typeStatus === "Warning" ? "warning" : "success",
            visible: true,
          });
        } else {
          const userAuth = decodeToken<UserAuth>(res.token);
          localStorage.setItem("token", res.token);
          setAuth(userAuth);
          setSuccess(true);
        }
      })
      .catch((error: Error) => {
        setToast({
          message: error.message,
          type: "error",
          visible: true,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setToast({
            message: "",
            type: "success",
            visible: false,
          });
        }, 3000);
        setLoading({
          message: "",
          visible: false,
        });
      });
  };

  const checkIsUserAuth = async (): Promise<void> => {
    const token = localStorage.getItem("token");
    setIsValidating(true);
    if (token) {
      await validateBearerToken(token)
        .then((res) => {
          if (res) {
            const userAuth = decodeToken<UserAuth>(token);
            setAuth(userAuth);
            navigate("/dashboard");
          } else {
            setAuth(null);
            navigate("/login");
            localStorage.removeItem("token");
          }
        })
        .finally(() => {
          setIsValidating(false);
        });
    }
  };

  const logOut = (): void => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  const createAccount = async (userData: FormikValues): Promise<void> => {
    setLoading({
      message: "Creando cuenta...",
      visible: true,
    });
    await registerUser(userData)
      .then((res: ServerResponseSuccess | ServerResponseFail) => {
        setToast({
          message: res.message,
          type: res.typeStatus === "Warning" ? "warning" : "success",
          visible: true,
        });
        if (res.typeStatus === "Success") {
          setSuccess(true);
          navigate("/login");
        }
      })
      .catch((error: Error) => {
        setToast({
          message: error.message,
          type: "error",
          visible: true,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setToast({
            message: "",
            type: "success",
            visible: false,
          });
        }, 3000);
        setLoading({
          message: "",
          visible: false,
        });
      });
  };

  const checkChangePassToken = async (): Promise<void> => {
    const token = location.pathname.split("/")[2];

    setIsValidating(true);
    setLoader({
      message: "Cargando....",
      loading: true,
    });

    await validateChangePassToken(token).then((res: boolean) => {
      if (res) {
        setIsValidating(false);
        setLoader({
          message: "",
          loading: false,
        });
      } else {
        setLoader({
          message: "Token invalido!, Por favor intente de nuevo!",
          loading: false,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    });
  };

  const sendRequestPassword = async (userData: FormikValues): Promise<void> => {
    setLoading({
      message: "Enviando solicitud...",
      visible: true,
    });
    await recoverPassword(userData)
      .then((res: ServerResponseSuccess | ServerResponseFail) => {
        setToast({
          message: res.message,
          type: res.typeStatus === "Warning" ? "warning" : "success",
          visible: true,
        });
        if (res.typeStatus === "Success") {
          setSuccess(true);
        }
      })
      .catch((error: Error) => {
        setToast({
          message: error.message,
          type: "error",
          visible: true,
        });
      })
      .finally(() => {
        setLoading({
          message: "",
          visible: false,
        });
        setTimeout(() => {
          setToast({
            message: "",
            type: "success",
            visible: false,
          });
        }, 3000);
      });
  };

  const changeUserPassword = async (userData: FormikValues): Promise<void> => {
    setLoading({
      message: "Actualizando contraseña...",
      visible: true,
    });
    const token = location.pathname.split("/")[2];
    await updatePassword(userData, token)
      .then((res: ServerResponseSuccess | ServerResponseFail) => {
        setToast({
          message: res.message,
          type: res.typeStatus === "Warning" ? "warning" : "success",
          visible: true,
        });
        if (res.typeStatus === "Success") {
          setSuccess(true);
        }
        navigate("/login");
      })
      .catch((error: Error) => {
        setToast({
          message: error.message,
          type: "error",
          visible: true,
        });
      })
      .finally(() => {
        setLoading({
          message: "",
          visible: false,
        });
        setTimeout(() => {
          setToast({
            message: "",
            type: "success",
            visible: false,
          });
        }, 3000);
      });
  };

  const validateAccount = async (): Promise<void> => {
    const token = location.pathname.split("/")[2];
    setIsValidating(true);
    setLoader({
      message: "Cargando....",
      loading: true,
    });

    await activeAccount(token).then(
      (res: ServerResponseSuccess | ServerResponseFail) => {
        setIsValidating(false);
        setLoader({
          message: res.message,
          loading: false,
        });
      }
    );
  };

  React.useEffect(() => {
    checkIsUserAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        success,
        phoneCode,
        logIn,
        logOut,
        createAccount,
        checkChangePassToken,
        sendRequestPassword,
        changeUserPassword,
        validateAccount,
        setAuth,
        setPhoneCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
