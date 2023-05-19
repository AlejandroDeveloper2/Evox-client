import { Outlet, Navigate } from "react-router-dom";

import { useAuth, useTheme } from "../hooks";

import Logo from "../assets/logo.png";
import LogoDark from "../assets/logo-2.png";
import { Toast, Toggle } from "../components";

const Layout = () => {
  const { auth } = useAuth();
  const { theme } = useTheme();

  return (
    <>
      {/* {auth ? (
        <Navigate to="/dashboard" />
      ) : ( */}
      <main
        className={`bg-primary-color dark:bg-mediumGray w-screen h-screen overflow-x-hidden relative`}
      >
        <div className="absolute top-10 right-3 z-10">
          <Toggle />
        </div>
        <div className="w-full bg-gradient-to-r from-blue via-purple to-lightBlue h-6  dark:to-purple dark:from-white"></div>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 relative">
          <div className="w-full bg-primary-color dark:bg-mediumGray flex justify-center items-center h-[400px] gap-4 flex-col pb-[40px] lg:h-screen lg:gap-6 px-5">
            <img
              src={theme === "light" ? Logo : LogoDark}
              alt="EVOX-LOGO"
              className="lg:scale-125 animate-move-right"
            />
            <h1 className="text-lg text-center text-darkGray lg:text-2xl font-montserrat font-bold dark:text-white">
              ¡Bienvenidos a la comunidad evoX!
            </h1>
          </div>
          <Toast />
          <Outlet />
        </div>
        <footer
          className="w-full flex justify-center items-center p-5  bg-gradient-to-r from-blue via-purple to-lightBlue 
          rounded-t-[10px] dark:to-purple dark:via-purple dark:from-white"
        >
          <h3 className="text-white text-[12px] md:text-[14px] font-montserrat text-center">
            All rights reserved© 2023
          </h3>
        </footer>
      </main>
      {/* )} */}
    </>
  );
};

export default Layout;
