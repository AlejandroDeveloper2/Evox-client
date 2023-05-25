import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../../hooks";

const Avatar = (): JSX.Element => {
  const { auth } = useAuth();
  const photo = auth ? (auth.photo ? auth.photo : null) : null;

  return (
    <div
      className="flex flex-row gap-3 justify-start items-center w-full py-4 
    md:py-7 bg-white px-4 border-[2px] border-primary-color my-5"
    >
      <div
        className="relative w-[4rem] h-[4rem] overflow-hidden bg-lightGray dark:bg-primary-color rounded-full 
        flex justify-center items-center lg:w-[5rem] lg:h-[5rem]"
      >
        {photo ? (
          <img
            src={photo}
            alt="Evox User"
            className="object-cover w-full h-full"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary-color dark:text-mediumGray text-[35px] lg:text-[40px]"
          />
        )}
      </div>
      <div className="flex flex-col gap-0 items-start">
        <span className="text-[14px] text-darkBlue font-poppins font-semibold lg:text-[16px]">
          {auth ? auth?.sub : "Tu nombre aqui"}
        </span>
        <Link
          to="/dashboard/profile"
          className="text-[12px] text-mediumGray font-poppins  font-semibold text-center lg:text-[14px]"
        >
          Editar perfil
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
