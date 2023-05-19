import React from "react";
import { FormikValues } from "formik";

import { UserProfile, UserProfileContextType } from "../types";
import getAxiosClient from "../config/axiosClient";
import { useApp } from "../hooks";
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
  const [profilePhoto, setProfilePhoto] = React.useState<string>("");
  const { setToast, setLoader } = useApp();

  // const { auth } = useAuth();

  // const getUserProfileData = ():void => {
  //   setUserProfile()
  // }

  const uploadProfilePhoto = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const files = e.target.files;
    const formData = new FormData();
    if (files) {
      formData.append("file", files[0]);
      formData.append("upload_preset", "Evox images");
    }
    const axiosClient = getAxiosClient("cloudinaryAPI");

    setLoader({
      message: "Uploading image...",
      loading: true,
    });

    try {
      const { data } = await axiosClient.post("/image/upload", formData);
      setProfilePhoto(data.secure_url);
      setLoader({
        message: "",
        loading: false,
      });
      setToast({
        message: "Profile photo uploaded!",
        type: "success",
        visible: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserProfile = async (userData: FormikValues): Promise<void> => {
    console.log(userData);
  };

  return (
    <UserProfileContext.Provider
      value={{
        userProfile,
        updateUserProfile,
        uploadProfilePhoto,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileProvider };
export default UserProfileContext;
