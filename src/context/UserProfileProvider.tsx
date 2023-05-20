import React from "react";
import { FormikValues } from "formik";

import { UserAuth, UserProfileContextType } from "../types";

import { useApp, useAuth } from "../hooks";
import { uploadProfileImage, updateUserProfile } from "../services/userProfile";
import { decodeToken } from "react-jwt";

const UserProfileContext = React.createContext<UserProfileContextType>(
  {} as UserProfileContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const UserProfileProvider = ({ children }: Props) => {
  const [profilePhoto, setProfilePhoto] = React.useState<string | null>(
    localStorage.getItem("profileImgUrl") ?? null
  );
  const { setToast, setLoader, setLoading } = useApp();
  const { setAuth } = useAuth();

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
      .catch((error: Error) => {
        setToast({
          message: error.message,
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

  const editUserProfile = async (userData: FormikValues): Promise<void> => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading({
        message: "Updating user profile...",
        visible: true,
      });
      await updateUserProfile(userData, token)
        .then((res) => {
          localStorage.removeItem("profileImgUrl");
          localStorage.setItem("token", res);
          setToast({
            message: "User profile updated!",
            type: "success",
            visible: true,
          });
          const user = decodeToken<UserAuth | null>(res);
          setAuth(user);
        })
        .catch((error: Error) => {
          setToast({
            message: error.message,
            type: "error",
            visible: true,
          });
        })
        .finally(() => {
          setLoading({
            message: "",
            visible: false,
          });
        });
    }
  };

  return (
    <UserProfileContext.Provider
      value={{
        profilePhoto,
        editUserProfile,
        uploadProfilePhoto,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileProvider };
export default UserProfileContext;
