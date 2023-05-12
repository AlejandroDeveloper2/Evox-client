import React from "react";
import { decodeToken } from "react-jwt";
import { FormikValues } from "formik";

import { authenticateUser, registerUser } from "../services/authentication";
import { AuthContextType, UserAuth } from "../types";
import { useApp } from "../hooks";

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: AuthContextType) => {
  const [auth, setAuth] = React.useState<UserAuth | null>(null);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  const { setToast, setLoading } = useApp();

  const logIn = async (userData: FormikValues): Promise<void> => {
    setLoading({
      message: "Checking user credentials...",
      visible: true,
    });
    await authenticateUser(userData)
      .then((token) => {
        setLoading({
          message: "",
          visible: false,
        });
        const userAuth = decodeToken<UserAuth>(token);
        localStorage.setItem("token", token);
        setAuth(userAuth);
      })
      .catch((error) => {
        setToast({
          message: error.message,
          type: "error",
          visible: true,
        });
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
    await registerUser(userData)
      .then((res) => {
        setLoading({
          message: "",
          visible: false,
        });
        setToast({
          message: res,
          type: "success",
          visible: true,
        });
      })
      .catch((error) => {
        setToast({
          message: error,
          type: "error",
          visible: true,
        });
      });
  };

  React.useEffect(() => {
    checkIsUserAuth();
  }, [auth]);

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
