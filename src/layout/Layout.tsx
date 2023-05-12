import { Outlet } from "react-router-dom";

import Logo from "../assets/logo.png";
import { Toast } from "../components";

const Layout = () => {
  return (
    <main className={`bg-primary-color w-screen h-screen overflow-x-hidden`}>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 relative">
        <div className="w-full bg-gradient-to-r from-blue via-purple to-lightBlue h-6 absolute top-0 z-10"></div>
        <div className="w-full bg-primary-color flex justify-center items-center h-[400px] gap-4 flex-col pb-[40px] lg:h-screen lg:gap-6 px-5">
          <img
            src={Logo}
            alt="EVOX-LOGO"
            className="lg:scale-125 animate-move-right"
          />
          <h1 className="text-lg text-center text-darkGray lg:text-2xl font-montserrat font-bold">
            ¡Bienvenidos a la comunidad evoX!
          </h1>
        </div>
        <Toast />
        <Outlet />
      </div>
      <footer className="w-full flex justify-center items-center p-5  bg-gradient-to-r from-blue via-purple to-lightBlue rounded-t-[10px]">
        <h3 className="text-white text-[12px] md:text-[14px] font-montserrat text-center">
          All rights reserved© 2023
        </h3>
      </footer>
    </main>
  );
};

export default Layout;
