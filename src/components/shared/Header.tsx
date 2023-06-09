import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";

import Logo from "../../assets/images/logo.png";

const Header = (): JSX.Element => {
  const { auth } = useAuth();

  return (
    <div
      className="w-screen bg-white dark:bg-darkGray h-[5rem] flex md:justify-start items-center justify-center
      fixed z-20 gap-1 md:px-20 top-0 left-0"
    >
      <Link
        to={auth?.roles[0].authority === "ROLE_USER" ? "/dashboard" : "/admin"}
        className="w-auto h-[100%]"
      >
        <img
          src={Logo}
          alt="Evox Logo"
          className="object-cover w-full h-full"
        />
      </Link>
      <div
        className="absolute bottom-0 w-full h-[6px] bg-gradient-to-r from-purple via-mediumBlue 
        to-lightBlue dark:to-mediumBlue dark:from-white left-0 right-0 m-auto"
      ></div>
    </div>
  );
};

export default Header;
