import React from "react";
import { decodeToken } from "react-jwt";

import { authenticateUser } from "../services/authentication";
import { AuthContextType, LoginFormValues, UserAuth } from "../types";
import { useApp } from "../hooks";

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: AuthContextType) => {
  const [auth, setAuth] = React.useState<UserAuth | null>(null);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  const { setToast, setLoading } = useApp();

  const logIn = async (userData: LoginFormValues): Promise<void> => {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
