import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

import { useApp } from "../hooks";

import { LateralMenu, Footer, Toast, OptionsBar, Header } from "../components";

const ProtectedLayout = (): JSX.Element => {
  const { toggleLateralMenu, isMenuVisible } = useApp();
  return (
    <main className="bg-white dark:bg-mediumGray w-screen h-screen overflow-x-hidden relative flex flex-col items-center">
      <Toast />
      <Header />
      <div className="grid grid-cols-12 h-auto relative w-full lg:w-full xl:w-3/4  mt-[5rem] mb-[1rem]">
        <LateralMenu colspan="col-span-4 lg:col-span-3" />
        <div className="bg-lightGray dark:bg-darkGray col-span-12 lg:col-span-9 xl:col-span-8 w-full flex-col items-center">
          <OptionsBar />
          <div className="bg-lightGray dark:bg-darkGray w-full min-h-[40rem]">
            <button
              className="fixed right-3 bottom-3 w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-mediumGray rounded-lg lg:hidden dark:bg-white z-10"
              onClick={toggleLateralMenu}
            >
              <FontAwesomeIcon
                icon={isMenuVisible ? faClose : faBars}
                className="text-white dark:text-darkGray md:text-[28px]"
              />
            </button>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default ProtectedLayout;
