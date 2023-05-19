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

export { uploadProfileImage };
