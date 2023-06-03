import { Outlet, useLocation } from "react-router-dom";

import { useTheme } from "../hooks";

import Logo from "../assets/images/logo.png";
import LogoDark from "../assets/images/logo-2.png";
import { Toast } from "../components";

const Layout = () => {
  const { theme } = useTheme();
  const page = useLocation().pathname.split("/")[1];

  return (
    <main
      className={`bg-primary-color dark:bg-mediumGray w-screen h-screen overflow-x-hidden relative`}
    >
      <div className="w-full bg-gradient-to-r from-purple via-mediumBlue to-lightBlue h-4  dark:to-purple dark:from-white"></div>
      <div className="flex flex-col justify-center relative items-center lg:gap-10 gap-5 overflow-x-hidden">
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
              ? "Recupera tu cuenta"
              : "¡Bienvenido a la comunidad de evoX!"}
          </h1>
        </div>
        <Toast />
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
