import { FormikValues } from "formik";

import getAxiosClient from "../config/axiosClient";

const uploadProfileImage = async (formData: FormData): Promise<string> => {
  const axiosClient = getAxiosClient("cloudinaryAPI");
  let response = "";
  try {
    const { data } = await axiosClient.post("/image/upload", formData);
    response = data.secure_url;
  } catch (error) {
    throw new Error("An error occurred while uploading!");
  }
  return response;
};

const updateUserProfile = async (userData: FormikValues, token:string): Promise<string> =>{
  const axiosClient = getAxiosClient("evoxAPI");
  let response:string = "";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axiosClient.put("/users/edit", userData, config);
    response = data.token;
  } catch (error: any) {
   throw new Error(error.response.data);
  }
  return response;
}

export { uploadProfileImage, updateUserProfile };
