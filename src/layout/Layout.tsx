import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useAuth, useTheme } from "../hooks";

import Logo from "../assets/logo.png";
import LogoDark from "../assets/logo-2.png";
import { Toast } from "../components";

const Layout = () => {
  const { auth } = useAuth();
  const { theme } = useTheme();
  const page = useLocation().pathname.split("/")[1];

  return (
    <>
      {auth ? (
        <Navigate to="/dashboard" />
      ) : (
      <main
        className={`bg-primary-color dark:bg-mediumGray w-screen h-screen overflow-x-hidden relative`}
      >
        <div className="w-full bg-gradient-to-r from-purple via-mediumBlue to-lightBlue h-4  dark:to-purple dark:from-white"></div>
        <div className="flex flex-col justify-center relative items-center lg:gap-10 gap-5">
          <div className="w-full bg-primary-color dark:bg-mediumGray flex justify-center items-center gap-4 flex-col lg:gap-6">
            <img
              src={theme === "light" ? Logo : LogoDark}
              alt="EVOX-LOGO"
              className="animate-move-right"
            />
            <h1
              className={`text-lg text-center lg:text-2xl font-poppins font-bold dark:text-white ${
                page === "login" || page === "recoverPassword"
                  ? page === "recoverPassword"
                    ? "text-blue"
                    : "block"
                  : "hidden"
              }`}
            >
              {page === "recoverPassword"
                ? "Recover your account"
                : "¡Welcome to evoX community!"}
            </h1>
          </div>
          <Toast />
          <Outlet />
        </div>
      </main>
     )} 
    </>
  );
};

export default Layout;
