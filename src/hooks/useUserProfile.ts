import React from "react";

import UserProfileContext from "../context/UserProfileProvider";

const useUserProfile = () => {
  return React.useContext(UserProfileContext);
};

export default useUserProfile;
