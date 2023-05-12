import React from "react";
import { decodeToken } from "react-jwt";
import { FormikValues } from "formik";
import { useLocation } from "react-router-dom";

import {
  authenticateUser,
  registerUser,
  validateChangePassToken,
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

const AuthProvider = ({ children }: AuthContextType) => {
  const [auth, setAuth] = React.useState<UserAuth | null>(null);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  const { setToast, setLoading, setIsValidating, setLoader } = useApp();
  const location = useLocation();

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
      }
    });
  };

  const checkIsUserAuth = (): void => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
    else setIsAuth(false);
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
      }
    });
  };

  React.useEffect(() => {
    checkIsUserAuth();
  }, [auth]);

  React.useEffect(() => {
    checkChangePassToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuth,
        logIn,
        logOut,
        createAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
