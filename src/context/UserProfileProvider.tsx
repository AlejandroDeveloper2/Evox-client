import React from "react";
import { FormikValues } from "formik";

import { UserProfile, UserProfileContextType } from "../types";
// import { useAuth } from "../hooks";

const UserProfileContext = React.createContext<UserProfileContextType>(
  {} as UserProfileContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const UserProfileProvider = ({ children }: Props) => {
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(
    null
  );
  // const { auth } = useAuth();

  // const getUserProfileData = ():void => {
  //   setUserProfile()
  // }

  const uploadProfilePhoto = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    // const files = e.target.files;
    // const data = new FormData();
    // data.append("file")
    console.log("upload");
  };

  const updateUserProfile = async (userData: FormikValues): Promise<void> => {
    console.log(userData);
  };

  return (
    <UserProfileContext.Provider
      value={{
        userProfile,
        updateUserProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileProvider };
export default UserProfileContext;
