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
    <div
      className="flex flex-col gap-1 justify-center items-center w-full py-4 bg-gradient-to-r 
    from-blue via-purple to-lightBlue lg:flex-row lg:gap-3 dark:from-white dark:to-purple"
    >
      <div className="relative w-10 h-10 overflow-hidden bg-white dark:bg-primary-color rounded-full flex justify-center items-center lg:w-[4rem] lg:h-[4rem]">
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
        <>
          <span className="text-[14px] text-white font-montserrat font-extrabold lg:text-[16px]">
            {auth?.sub}
          </span>
          <Link
            to="/dashboard/profile"
            className="text-[12px] text-white font-montserrat font-normal text-center lg:text-[14px]"
          >
            Edit profile
          </Link>
        </>
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
