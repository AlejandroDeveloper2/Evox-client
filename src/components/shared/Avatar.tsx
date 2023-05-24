import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../hooks";

interface AvatarProps {
  haslink?: boolean;
}
const Avatar = (props: AvatarProps): JSX.Element => {
  const { auth } = useAuth();
  const { haslink } = props;

  const photo = auth ? (auth.photo ? auth.photo : null) : null;

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-start items-center w-full py-7 bg-white px-4 border-[2px] border-primary-color my-5">
      <div
        className="relative w-10 h-10 overflow-hidden bg-lightGray dark:bg-primary-color rounded-full 
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
      {haslink ? (
        <div className="flex flex-col gap-0 items-start">
          <span className="text-[14px] text-darkBlue font-poppins font-semibold lg:text-[16px]">
            {auth ? auth?.sub : "User Name"}
          </span>
          <Link
            to="/dashboard/profile"
            className="text-[12px] text-mediumGray font-poppins  font-semibold text-center lg:text-[14px]"
          >
            Edit profile
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <span className="text-[14px] text-white font-montserrat font-extrabold lg:text-[16px]">
            {auth?.sub}
          </span>
          <span className="text-[14px] text-white font-montserrat font-normal lg:text-[16px]">
            {auth?.countryOfResidence}
          </span>
          <span className="text-[14px] text-white font-montserrat font-normal lg:text-[16px]">
            {auth?.fullName}
          </span>
        </div>
      )}
    </div>
  );
};

const AvatarVariant = (): JSX.Element => {
  return <Avatar haslink />;
};

export default Avatar;
AvatarVariant;
