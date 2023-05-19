import React from "react";
import { FormikValues } from "formik";

import { UserProfile, UserProfileContextType } from "../types";

import { useApp } from "../hooks";
import { uploadProfileImage } from "../services/userProfile";

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
      formData.append("upload_preset", "tfmnv7bp");
    }
    setLoader({
      message: "Uploading image...",
      loading: true,
    });
    await uploadProfileImage(formData)
      .then((res) => {
        setProfilePhoto(res);
        localStorage.setItem("profileImgUrl", res);
        setToast({
          message: "Profile photo uploaded!",
          type: "success",
          visible: true,
        });
      })
      .catch((error) => {
        setToast({
          message: error,
          type: "error",
          visible: true,
        });
      })
      .finally(() => {
        setLoader({
          message: "",
          loading: false,
        });
      });
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
