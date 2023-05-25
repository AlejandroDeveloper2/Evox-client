import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from "../../../hooks";

const EditProfileAvatar = (): JSX.Element => {
  const { auth } = useAuth();

  const photo = auth ? (auth.photo ? auth.photo : null) : null;

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-start items-end w-full py-7 bg-lightGray px-20">
      <div
        className="relative w-10 h-10 overflow-hidden bg-white dark:bg-primary-color rounded-full 
          flex justify-center items-center lg:w-[4rem] lg:h-[4rem]"
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
            className="text-primary-color dark:text-mediumGray text-[20px] lg:text-[30px]"
          />
        )}
      </div>

      <div className="flex flex-col gap-3 items-center lg:items-start">
        <span className="text-[14px] text-darkBlue font-poppins font-semibold lg:text-[16px]">
          {auth ? auth?.country : "País"}
        </span>
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <span className="text-[14px] text-darkBlue font-poppins font-extrabold lg:text-[16px]">
            {auth ? auth.sub : "Nombre aquí"}
          </span>
          <span className="text-[14px] text-mediumGray font-poppins font-semibold">
            {auth ? auth?.email : "Email Aqui"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditProfileAvatar;
