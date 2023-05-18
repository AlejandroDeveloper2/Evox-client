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

  const { setToast, setLoading, setIsValidating, setLoader } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const logIn = async (userData: FormikValues): Promise<void> => {
    setLoading({
      message: "Checking user credentials...",
      visible: true,
    });
    await authenticateUser(userData).then((res: LoginReasponse) => {
      setLoading({
        message: "",
        visible: false,
      });

      if (!res.token) {
        setToast({
          message: res.message,
          type: res.typeStatus === "Error" ? "error" : "warning",
          visible: true,
        });
      } else {
        const userAuth = decodeToken<UserAuth>(res.token);
        localStorage.setItem("token", res.token);
        setAuth(userAuth);
        setSuccess(true);
      }
    });
  };

  const checkIsUserAuth = async (): Promise<void> => {
    const token = localStorage.getItem("token");
    if (token) {
      await validateBearerToken(token).then((res) => {
        if (res) {
          const userAuth = decodeToken<UserAuth>(token);
          setAuth(userAuth);
          navigate("/dashboard");
        } else {
          setAuth(null);
          navigate("/login");
          localStorage.removeItem("token");
        }
      });
    }
  };

  const logOut = (): void => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  const createAccount = async (userData: FormikValues): Promise<void> => {
    setLoading({
      message: "Creating Account...",
      visible: true,
    });
    await registerUser(userData).then(
      (res: ServerResponseSuccess | ServerResponseFail) => {
        setLoading({
          message: "",
          visible: false,
        });
        setToast({
          message: res.message,
          type:
            res.typeStatus === "Error"
              ? "error"
              : res.typeStatus === "Warning"
              ? "warning"
              : "success",
          visible: true,
        });
        if (res.typeStatus === "Success") {
          setSuccess(true);
          navigate("/login");
        }
      }
    );
  };

  const checkChangePassToken = async (): Promise<void> => {
    const token = location.pathname.split("/")[2];

    setIsValidating(true);
    setLoader({
      message: "Loading....",
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
          message: "Invalid Token!, please try again!",
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
      message: "Sending request...",
      visible: true,
    });
    await recoverPassword(userData).then(
      (res: ServerResponseSuccess | ServerResponseFail) => {
        setLoading({
          message: "",
          visible: false,
        });
        setToast({
          message: res.message,
          type:
            res.typeStatus === "Error"
              ? "error"
              : res.typeStatus === "Warning"
              ? "warning"
              : "success",
          visible: true,
        });
        if (res.typeStatus === "Success") {
          setSuccess(true);
        }
      }
    );
  };

  const changeUserPassword = async (userData: FormikValues): Promise<void> => {
    setLoading({
      message: "Updating password...",
      visible: true,
    });
    const token = location.pathname.split("/")[2];
    await updatePassword(userData, token).then(
      (res: ServerResponseSuccess | ServerResponseFail) => {
        setLoading({
          message: "",
          visible: false,
        });
        setToast({
          message: res.message,
          type:
            res.typeStatus === "Error"
              ? "error"
              : res.typeStatus === "Warning"
              ? "warning"
              : "success",
          visible: true,
        });
        if (res.typeStatus === "Success") {
          setSuccess(true);
        }
      }
    );
  };

  const validateAccount = async (): Promise<void> => {
    const token = location.pathname.split("/")[2];
    setIsValidating(true);
    setLoader({
      message: "Loading....",
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
        logIn,
        logOut,
        createAccount,
        checkChangePassToken,
        sendRequestPassword,
        changeUserPassword,
        validateAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
