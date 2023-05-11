import { Outlet } from "react-router-dom";
import { Header, LateralMenu, Footer } from "../components";

const ProtectedLayout = (): JSX.Element => {
  return (
    <main className="bg-primary-color w-screen h-screen overflow-x-hidden relative">
      <Header pageName="Home" />
      <div className="flex h-full relative w-full lg:w-3/4 shadow-lg my-[5rem] mx-auto">
        <LateralMenu />
        <div className="bg-white lg:w-[80%] w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProtectedLayout;
