import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../hooks";

import { Header, LateralMenu, Footer } from "../components";

const ProtectedLayout = (): JSX.Element => {
  const { isAuth } = useAuth();
  return (
    <>
      {isAuth ? (
        <main className="bg-primary-color dark:bg-mediumGray w-screen h-screen overflow-x-hidden relative">
          <Header pageName="Home" />
          <div className="flex h-full relative w-full lg:w-3/4 shadow-lg my-[5rem] mx-auto">
            <LateralMenu />
            <div className="bg-white dark:bg-darkGray lg:w-[80%] w-full">
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
