import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getProfileItems } from "./constans";
import { useAuth, useEvoxServices } from "../../../hooks";

const UserProfile = (): JSX.Element => {
  const { auth } = useAuth();
  const { userReferrals } = useEvoxServices();
  const profileItems = getProfileItems(userReferrals, auth);

  return (
    <div className="bg-primary-color dark:bg-mediumGray lg:w-1/2 w-full rounded-xl p-10 flex flex-col gap-3 m-auto">
      <h2 className="text-darkGray dark:text-white text-[20px] font-montserrat font-bold">
        User Profile
      </h2>
      {profileItems.map((item, index) => (
        <div className="flex flex-col gap-3 lg:flex-row" key={index}>
          <h3 className="text-darkGray dark:text-white text-[16px] font-montserrat font-bold flex gap-2 items-center">
            <FontAwesomeIcon icon={item.icon} />
            {item.label}
          </h3>
          <p className="dark:text-white text-darkGray text-[16px] font-montserrat">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
