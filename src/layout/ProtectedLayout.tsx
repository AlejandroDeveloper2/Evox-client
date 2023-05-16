import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Navigate } from "react-router-dom";

import { useApp, useAuth } from "../hooks";

import { Header, LateralMenu, Footer, Toast } from "../components";

const ProtectedLayout = (): JSX.Element => {
  const { auth } = useAuth();
  const { toggleLateralMenu, isMenuVisible } = useApp();

  return (
    <>   
      {auth ? (
        <main className="bg-primary-color dark:bg-mediumGray w-screen h-screen overflow-x-hidden relative">
          <Toast />
          <Header pageName="Home" />
          <div className="flex h-auto relative w-full lg:w-3/4 shadow-lg mt-[5rem] mb-[1rem] mx-auto">
            <LateralMenu />
            <div className="bg-white dark:bg-darkGray lg:w-[80%] w-full">
              <button
                className="fixed right-2 bottom-2 w-10 h-10 bg-mediumGray rounded-lg lg:hidden dark:bg-white z-10"
                onClick={toggleLateralMenu}
              >
                <FontAwesomeIcon
                  icon={isMenuVisible ? faClose : faBars}
                  className="text-white dark:text-darkGray"
                />
              </button>
              <Outlet />
            </div>
          </div>
          <Footer />
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedLayout;
