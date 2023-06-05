import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

import { useApp } from "../hooks";
import { Header, LateralMenu, OptionsBar, Footer, Toast } from "../components";

const AdminLayout = (): JSX.Element => {
  const { toggleLateralMenu, isMenuVisible, page } = useApp();
  return (
    <main className="bg-white dark:bg-mediumGray w-screen h-screen overflow-x-hidden relative">
      <Toast />
      <Header pageName={page} />
      <div className="flex h-auto relative w-full xl:w-[70%] mt-[5rem] mb-[1rem] mx-auto">
        <LateralMenu />
        <div className="bg-lightGray dark:bg-darkGray xl:w-[70%] w-full flex-col items-center">
          <OptionsBar />
          <div className="bg-lightGray dark:bg-darkGray w-full min-h-[40rem]">
            <button
              className="fixed right-3 bottom-3 w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-mediumGray rounded-lg xl:hidden dark:bg-white z-10"
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

export default AdminLayout;
